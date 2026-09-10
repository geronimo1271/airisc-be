/* eslint-disable */

module.exports = (shipit) => {
  require("shipit-deploy")(shipit);

  const repositoryUrlPrefix =
    process.env.DEPLOY_ENV === 'gitlab'
      ? 'git@github.com:'
      : 'git@github.com:';

  const repositoryUrl = 'geronimo1271/airisc-fe.git';

  shipit.initConfig({
    default: {
      repositoryUrl: `${repositoryUrlPrefix}${repositoryUrl}`,
      keepReleases: 3,
      keepWorkspace: false,
      ignores: [
        ".gitignore",
        ".git",
        "shipitfile.js",
        "node_modules",
        ".nuxt",
        ".output",
      ],
      deleteOnRollback: false,
    },
    staging: {
      deployTo: '/home/airisc-fe/airisc-fe',
      servers: 'airisc-fe@204.216.223.58',
      branch: 'main',
      port: 3000,
    },
    production: {
      deployTo: '/home/airisc-fe/airisc-fe',
      servers: 'airisc-fe@204.216.223.58',
      branch: 'main',
      port: 3000,
    },
  });



  // TASKS DEFINITION

  shipit.blTask("clean", async () => {
    // DOC: remove node_modules
    await shipit.remote(`rm -rf ${shipit.releasePath}/node_modules`);
    // DOC: remove .nuxt and .output
    await shipit.remote(
      `rm -rf ${shipit.releasePath}/.nuxt ${shipit.releasePath}/.output`,
    );
    // DOC: remove .env
    await shipit.remote(`rm ${shipit.releasePath}/.env || echo "no .env"`);
    // DOC: remove yarn cache
    await shipit.remote(`cd ${shipit.releasePath} && npx yarn cache clean`);
  });

  shipit.blTask("build", async () => {
    // DOC: create symlink to .env
    await shipit.remote(
      `ln -s ${shipit.config.deployTo}/shared/.env ${shipit.releasePath}/.env`,
    );
    // DOC: install dependencies
    await shipit.remote(`cd ${shipit.releasePath} && npx yarn install`);
    // DOC: build project
    await shipit.remote(
      `cd ${shipit.releasePath} && PORT=${shipit.config.port} NODE_ENV=${shipit.environment} npx yarn run build`,
    );
  });

  shipit.task("start", async () => {
    // DOC: start pm2
    await shipit.remote(
      `cd ${shipit.config.deployTo} && PORT=${shipit.config.port} NODE_ENV=${shipit.environment} npx pm2 startOrReload current/ecosystem.config.cjs --env ${shipit.environment} --update-env`,
    );
    shipit.emit("started");
  });

  // EVENTS

  shipit.on("updated", () => {
    shipit.start("clean", "build");
  });

  shipit.on("deployed", () => {
    shipit.start("start");
  });

  shipit.on("rollbacked", () => {
    shipit.start("start");
  });
};
