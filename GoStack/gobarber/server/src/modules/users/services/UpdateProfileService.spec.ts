import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfileService: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update a profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456',
    });

    const updatedUser = await updateProfileService.run({
      user_id: user.id,
      name: 'Jack Doe',
      email: 'jackdoe@test.com',
    });

    expect(updatedUser.name).toBe('Jack Doe');
    expect(updatedUser.email).toBe('jackdoe@test.com');
  });

  it('should not be able to update a profile with a inexistent id', async () => {
    await expect(
      updateProfileService.run({
        user_id: 'inexistent-id',
        name: 'Jack Doe',
        email: 'jackdoe@test.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it(`should not be able to update a profile with another user's email`, async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'Jack Doe',
      email: 'jackdoe@test.com',
      password: '123456',
    });

    await expect(
      updateProfileService.run({
        user_id: user.id,
        name: 'Jack Doe',
        email: 'johndoe@test.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update a password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456',
    });

    const updatedUser = await updateProfileService.run({
      user_id: user.id,
      name: 'Jack Doe',
      email: 'jackdoe@test.com',
      old_password: '123456',
      password: '123123',
    });

    expect(updatedUser.password).toBe('123123');
  });

  it('should not be able to update a password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456',
    });

    await expect(
      updateProfileService.run({
        user_id: user.id,
        name: 'Jack Doe',
        email: 'jackdoe@test.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a password wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456',
    });

    await expect(
      updateProfileService.run({
        user_id: user.id,
        name: 'Jack Doe',
        email: 'jackdoe@test.com',
        password: '123123',
        old_password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
