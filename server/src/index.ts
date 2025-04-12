import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import weatherRoutes from "./routes/weatherRoutes"
import cors from 'cors';
import helmet from 'helmet';

// initializes middleware
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//home endpoint
app.get('/', (req, res) =>{
    res.send('home');
});

app.use("/api/weather", weatherRoutes);


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})