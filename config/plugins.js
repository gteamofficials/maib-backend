module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
});

module.exports = {
  migrations: {
    enabled: true,
    config: {
      autoStart: true,
      migrationFolderPath: "migrations",
    },
  },
};
