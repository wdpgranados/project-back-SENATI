import {Sequelize} from 'sequelize-typescript';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();


const database = new Sequelize(process.env.DATABASE_URL as string,{
    dialect: 'postgres',
    logging: false,
    dialectOptions: {},
    define: {
        timestamps: true,
        underscored: true,
        schema: process.env.DB_SCHEMA
    },
    models: [path.join(__dirname, '../models/*.ts')]
});


export const connecDB = async () => {
    try {
        await database.authenticate();
        await database.sync();
        console.log('Database connected...');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}