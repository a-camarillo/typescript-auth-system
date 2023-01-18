import express, { Request, Response, NextFunction } from 'express';
import registration from './registration.js';
import login from './login.js'; 

const app = express();
const port: number = 3000;

app.use(express.urlencoded({ extended: true}))
app.use('/registration',registration);
app.use('/login', login);

app.get('/', (req: Request, res: Response) => {
    res.set('Content-Type','text/html');
    res.status(200);
    res.send("<html><body><h1>Hello World!</h1></body></html>");
})

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});

