/* eslint-disable */
const pkg = require("./package");
const instances = process.env.NODE_ENV === "production" ? 2 : 1;

module.exports = {
  apps: [
    {
      name: pkg.name,
      script: "./.output/server/index.mjs",
      args: "start",
      cwd: `${process.env.PWD}/current`,
      autorestart: true,
      exec_mode: "cluster",
      instances,
      watch: false,
      max_memory_restart: "1G",
      env_staging: {
        NODE_ENV: "staging",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
