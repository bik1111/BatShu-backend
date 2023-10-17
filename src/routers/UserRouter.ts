import express from 'express';
import { postUser, deleteUser } from '../controller/UserController';
import { confirmAndFetchUserInfo, getUserInfo, tokenToUid } from '../auth/auth';

const UserRouter = express.Router();

UserRouter.route('/check').get(tokenToUid, confirmAndFetchUserInfo);
UserRouter.route('/').get(tokenToUid, getUserInfo);
UserRouter.route('/').post(tokenToUid, postUser);
UserRouter.route('/').delete(tokenToUid, deleteUser);

export default UserRouter;
