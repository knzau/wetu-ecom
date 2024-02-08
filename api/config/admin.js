module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "someRandomLongString"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "someSecretKey"),
  },
});
