import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const { NODE_ENV, PORT } = process.env;

//! Création de la WebAPI
const app = express();

//! App Middleware
//? Logger
app.use(morgan('tiny'));

//? Cors (TODO: Faire la config des CORS)
app.use(cors());

//? Gestion du body (JSON)
app.use(express.json());

//! Routing


//! Démarrage de la WebAPI
app.listen(PORT, () => {
    console.log(`WebAPI is running on port ${PORT} (${NODE_ENV})`);
});