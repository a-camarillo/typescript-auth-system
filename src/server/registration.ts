import express, { Request, Response, NextFunction, Router } from 'express';
import path from 'path';

const router: Router = express.Router();

const registrationPage: string = path.join(__dirname,'client/registration.html')

router.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.sendFile(registrationPage);
})


export default router;