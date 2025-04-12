import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) =>{
    res.send('home');
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})