import express from 'express';
import { connectToDatabase } from './config/orm';
import router from './config/router';
import 'reflect-metadata';

const launch = async () => {
    await connectToDatabase();
    const app = express();
    app.use(express.json());
    app.use(router);
    app.set('port', process.env.PORT || 8080);
    console.log(`Running in ${process.env.MODE} mode`);
    app.listen(app.get('port'), () => {
        console.log(`Server started in http://localhost:${app.get('port')}`);
    });
};

launch();
