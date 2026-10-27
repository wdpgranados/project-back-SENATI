import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const database = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {}
});

export const connecDB: () => Promise<void> = async (): Promise<void> => {
    try {
        await database.authenticate();
        await database.sync();
        console.log('Database connected...');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};