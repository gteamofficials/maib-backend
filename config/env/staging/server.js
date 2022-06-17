module.exports = ({ env }) => ({
  proxy: true,
  url: env("STAGING_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
