import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.set('Content-Type','text/html');
    res.status(200);
    res.send("<html><body><h1>Hello World!</h1></body></html>");
})

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});

