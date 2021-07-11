import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });
  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.run({
      date: new Date(),
      provider_id: '1',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1');
  });

  it(`shouldn't be able to create two appointments on the same time`, async () => {
    const appointmentDate = new Date(2020, 1, 1, 1);

    await createAppointment.run({
      date: appointmentDate,
      provider_id: '1',
    });

    await expect(
      createAppointment.run({
        date: appointmentDate,
        provider_id: '1',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
