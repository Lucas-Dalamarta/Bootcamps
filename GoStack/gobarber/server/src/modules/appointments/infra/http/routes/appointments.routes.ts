import Router from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticaded';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);

// appointmentsRouter.get('/', async (resquest, response) => {
//   const appointmentsRepository = new AppointmentsRepository();
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

export default appointmentsRouter;
