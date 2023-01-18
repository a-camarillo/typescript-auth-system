import express, { Request, Response, NextFunction, Router } from 'express';
import UserModel from './db.js';
import { UniqueConstraintError } from '@sequelize/core';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// __dirname equivalent for ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const registration: Router = express.Router();

const registrationPage: string = path.join(__dirname,'client/registration.html')

registration.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.sendFile(registrationPage);
})

registration.post('/', async (req: Request, res: Response) => {

    const username = req.body.username;
    const password = req.body.password;
    try {
        await UserModel.sync({});
        await UserModel.create({
            username: username,
            password: password
        });
        res.status(201);
        res.redirect('login');
    }
    catch (err: any) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(409).send('That username is already taken!');
        }
    }
})

export default registration;