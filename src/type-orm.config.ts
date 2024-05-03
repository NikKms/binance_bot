import { config } from 'dotenv';
import { DataSource } from 'typeorm';
config();

const AppDataSource = new DataSource({
	type: 'mysql',
	host: process.env.DB_HOST,
	port: +process.env.DB_PORT,
	username: process.env.DB_HOST,
	password: process.env.DB_HOST,
	database: process.env.DB_HOST,
	entities: ['**/*.entity.ts'],
	migrations: ['src/migrations/*.ts'],
	synchronize: true,
});

AppDataSource.initialize()
	.then(() => {
		console.log('Data Source has been initialized!');
	})
	.catch((err) => {
		console.error('Error during Data Source initialization', err);
	});

export default AppDataSource;
