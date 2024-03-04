import express, { Request, Response } from 'express';

const app = express();
app.use(express.json())

const port = 3000;

app.use(express.static('public'));
app.set('public engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
    res.render('index')
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
