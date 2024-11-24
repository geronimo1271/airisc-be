"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@strapi/utils");
const cron_tasks_1 = __importDefault(require("./cron-tasks"));
exports.default = () => ({
    host: (0, utils_1.env)('HOST', '0.0.0.0'),
    port: utils_1.env.int('PORT', 1337),
    app: {
        keys: utils_1.env.array('APP_KEYS'),
    },
    webhooks: {
        populateRelations: utils_1.env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
    url: (0, utils_1.env)('HOSTNAME', 'http://localhost:1337'),
    cron: {
        enabled: true,
        tasks: cron_tasks_1.default,
    },
});
//# sourceMappingURL=server.js.map