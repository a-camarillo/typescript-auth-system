import express, { Request, Response, Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const login: Router = express.Router();

const loginPage: string = path.join(__dirname,'/client/login.html')

login.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.sendFile(loginPage)
})

export default login;