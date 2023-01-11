import express, { Request, Response, Router } from 'express';
import path from 'path';

const router: Router = express.Router();

const loginPage: string = path.join(__dirname,'/client/login.html')

router.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.sendFile(loginPage)
})

export default router;