import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Blog } from '../../modules/blog/infrastructure/database/Blog';

export const connectToDatabase = async () => {
    return await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'node-admin',
        entities: [Blog],
        synchronize: true,
        logging: false
    });
};
