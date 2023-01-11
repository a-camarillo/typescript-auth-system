import express, { Request, Response, NextFunction, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.set('Content-Type','text/html');
    res.status(200);
    res.send("<html><body><h1>This is the registration page</h1></body></html>");
})


export default router;