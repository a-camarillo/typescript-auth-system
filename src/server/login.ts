import express, { Request, Response, Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import UserModel from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const login: Router = express.Router();

const loginPage: string = path.join(__dirname,'/client/login.html')

login.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.sendFile(loginPage)
})

login.post('/', async (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        await UserModel.sync({});
        await UserModel.findAll({
            attributes: ['username','password'],
            where: {
                username: username,
                password: password
            }
        })
        res.status(301).redirect('/');
    }
    catch (err: any) {

    }
})

export default login;