import express from 'express';
import { connectToDatabase } from './config/orm';
import router from './config/router';
import 'reflect-metadata';
import { Database, Resource } from '@adminjs/typeorm';
import AdminJS from 'adminjs';
import * as AdminJSExpress from '@adminjs/express';
import { Blog } from './modules/blog/infrastructure/database/Blog';

const launch = async () => {
    await connectToDatabase();
    const app = express();

    AdminJS.registerAdapter({ Database, Resource });
    const admin1Js = new AdminJS({
        // databases: [connection],
        resources: [
            {
                resource: Blog,
                options: {
                    // https://docs.adminjs.co/ResourceOptions.html#navigation
                    navigation: {
                        name: null
                    }
                }
            }
        ],
        rootPath: '/admin1'
    });

    const admin2Js = new AdminJS({
        // databases: [connection],
        resources: [
            {
                resource: Blog,
                options: {
                    // https://docs.adminjs.co/ResourceOptions.html#navigation
                }
            }
        ],
        rootPath: '/admin2'
    });

    const admin1Router = AdminJSExpress.default.buildRouter(admin1Js);
    const admin2Router = AdminJSExpress.default.buildRouter(admin2Js);
    app.use(admin1Js.options.rootPath, admin1Router);
    app.use(admin2Js.options.rootPath, admin2Router);
    app.use(router);

    app.use(express.json());
    app.set('port', process.env.PORT || 8080);
    console.log(`Running in ${process.env.MODE} mode`);
    app.listen(app.get('port'), () => {
        console.log(`Server started in http://localhost:${app.get('port')}`);
    });
};

launch();
