import { Router } from 'express';
import * as controller from '../controllers/userController.js';
import validate from '../middleware/validateUser.js';

const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.post('/', validate, controller.createUser);
router.put('/:id', validate, controller.updateUser);
router.delete('/:id', controller.deleteUser);

export default router;
