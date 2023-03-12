module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5433),
			database: env('DATABASE_NAME', 'store'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', '12345678'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
