module.exports = (shipit) => {
  require('shipit-deploy')(shipit);

  const repositoryUrlPrefix =
    process.env.DEPLOY_ENV === 'gitlab'
      ? `https://gitlab-ci-token:${process.env.CI_JOB_TOKEN}@git.develondigital.com/`
      : 'git@git.develondigital.com:';

  const repositoryUrl = 'livigno/live-and-work-be.git';

  shipit.initConfig({
    default: {
      repositoryUrl: `${repositoryUrlPrefix}${repositoryUrl}`,
      keepReleases: 3,
      ignores: ['.git', 'node_modules', 'test'],
      deleteOnRollback: false,
    },
    staging: {
      deployTo: '/space/htdocs/crewbe',
      servers: 'crewbe@34.159.16.110',
      branch: 'staging',
      port: 3004,
    },
    production: {
      deployTo: '/space/htdocs/crewbe',
      servers: 'crewbe@34.159.16.110',
      branch: 'main',
      port: 3002,
    },
  });

  shipit.blTask('clean', async () => {
    await shipit.remote(
      `rm ${shipit.releasePath}/.env || echo ".env not present"`
    );
    await shipit.remote(
      `rm ${shipit.releasePath}/uploads || echo "uploads not present"`
    );
    await shipit.remote(
      `cd ${shipit.releasePath} && rm -rf ./node_modules && npx yarn cache clean`
    );
  });

  shipit.blTask('install', async () => {
    await shipit.remote(
      `ln -s ${shipit.config.deployTo}/shared/.env ${shipit.releasePath}/.env`
    );
    await shipit.remote(`rm -r ${shipit.releasePath}/public/uploads`);
    await shipit.remote(
      `ln -s ${shipit.config.deployTo}/shared/uploads ${shipit.releasePath}/public/`
    );
    await shipit.remote(
      `cd ${shipit.releasePath} && NODE_ENV=${shipit.environment} npx yarn install`
    );
    await shipit.remote(
      `cd ${shipit.releasePath} && NODE_ENV=${shipit.environment} npx yarn build`
    );
  });

  shipit.task('start', async () => {
    await shipit.remote(
      `cd ${shipit.config.deployTo} && PORT=${shipit.config.port} NODE_ENV=${shipit.environment} npx pm2 startOrReload current/ecosystem.config.js --update-env && pm2 save && systemctl --user restart pm2-crewbe`
    );
  });

  shipit.on('updated', () => {
    shipit.start('clean', 'install');
  });

  shipit.on('deployed', () => {
    shipit.start('start');
  });

  shipit.on('rollbacked', () => {
    shipit.start('start');
  });
};

