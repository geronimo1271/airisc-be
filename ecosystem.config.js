const pkg = require('./package');
const instances = process.env.NODE_ENV === 'production' ? 2 : 1;

module.exports = {
  apps: [
    {
      name: pkg.name,
      cwd: `${process.env.PWD}/current`,
      autorestart: true,
      script: 'server.js',
      instances,
      env_staging: {
        NODE_ENV: 'staging',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
