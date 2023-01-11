import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.set('Content-Type','text/html');
    res.status(200);
    res.send("<html><body><h1>This is the login page</h1></body></html>")
})

export default router;