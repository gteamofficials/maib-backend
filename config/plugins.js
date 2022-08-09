module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  migrations: {
    enabled: true,
    config: {
      autoStart: true,
      migrationFolderPath: "migrations",
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
