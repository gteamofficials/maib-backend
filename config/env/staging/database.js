module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('STAGING_HOST'),
      port: env('STAGING_PORT'),
      database: env('STAGING_DATABASE'),
      user: env('STAGING_USER'),
      password: env('STAGING_PASSWORD'),
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});