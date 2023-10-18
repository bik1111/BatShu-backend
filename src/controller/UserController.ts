import { type Request, type Response } from 'express';

import admin from 'firebase-admin';

import { createUser, removeUser } from '../service/UserService';
import { type ApiResponse } from 'src/domain/response';

export const postUser = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.headers.authorization !== null && req.headers.authorization !== undefined) {
      const token: string | null = req.headers.authorization.split('Bearer ')[1];

      const decodedToken = await admin.auth().verifyIdToken(token);
      const uid = decodedToken.uid;

      const userInfo = await admin.auth().getUser(uid);

      if (!(userInfo === undefined)) {
        const resData: ApiResponse = {
          ok: false,
          msg: '등록되지 않은 유저입니다.'
        };
        res.status(400).json(resData);
      }

      const resData: ApiResponse = await createUser(userInfo.uid);

      res.status(200).json(resData);
    }
  } catch (error) {
    console.error('Error:', error);
    const resData: ApiResponse = {
      ok: false,
      msg: 'INTERNAL SERVER ERROR'
    };
    res.status(500).json(resData);
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.headers.authorization !== null && req.headers.authorization !== undefined) {
      const userInfo = await admin.auth().getUser(req.params.uid);

      if (userInfo !== null && userInfo !== undefined) {
        const resData: ApiResponse = {
          ok: false,
          msg: '등록되지 않은 유저입니다.'
        };
        res.status(400).json(resData);
      }

      const resData: ApiResponse = await removeUser(userInfo.uid);

      res.status(200).json(resData);
    }
  } catch (error) {
    console.log('Error:', error);
    const resData: ApiResponse = {
      ok: false,
      msg: 'INTERNAL SERVER ERROR'
    };
    res.status(500).json(resData);
  }
};
