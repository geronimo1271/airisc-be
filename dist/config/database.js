"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const utils_1 = require("@strapi/utils");
exports.default = () => {
    const client = (0, utils_1.env)('DATABASE_CLIENT', 'mysql2');
    const connections = {
        mysql: {
            connection: {
                connectionString: (0, utils_1.env)('DATABASE_URL'),
                host: (0, utils_1.env)('DATABASE_HOST', 'localhost'),
                port: utils_1.env.int('DATABASE_PORT', 3306),
                database: (0, utils_1.env)('DATABASE_NAME', 'airisc_strapi'),
                user: (0, utils_1.env)('DATABASE_USERNAME', 'nivorago'),
                password: (0, utils_1.env)('DATABASE_PASSWORD', 'Giorgio77!'),
                ssl: utils_1.env.bool('DATABASE_SSL', false) && {
                    key: (0, utils_1.env)('DATABASE_SSL_KEY', undefined),
                    cert: (0, utils_1.env)('DATABASE_SSL_CERT', undefined),
                    ca: (0, utils_1.env)('DATABASE_SSL_CA', undefined),
                    capath: (0, utils_1.env)('DATABASE_SSL_CAPATH', undefined),
                    cipher: (0, utils_1.env)('DATABASE_SSL_CIPHER', undefined),
                    rejectUnauthorized: utils_1.env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
                },
            },
            pool: {
                min: utils_1.env.int('DATABASE_POOL_MIN', 2),
                max: utils_1.env.int('DATABASE_POOL_MAX', 10),
            },
        },
        mysql2: {
            connection: {
                host: (0, utils_1.env)('DATABASE_HOST', '127.0.0.1'),
                port: utils_1.env.int('DATABASE_PORT', 3306),
                database: (0, utils_1.env)('DATABASE_NAME', 'airisc_strapi'),
                user: (0, utils_1.env)('DATABASE_USERNAME', 'nivorago'),
                password: (0, utils_1.env)('DATABASE_PASSWORD', 'Giorgio77!'),
                ssl: utils_1.env.bool('DATABASE_SSL', false) && {
                    key: (0, utils_1.env)('DATABASE_SSL_KEY', undefined),
                    cert: (0, utils_1.env)('DATABASE_SSL_CERT', undefined),
                    ca: (0, utils_1.env)('DATABASE_SSL_CA', undefined),
                    capath: (0, utils_1.env)('DATABASE_SSL_CAPATH', undefined),
                    cipher: (0, utils_1.env)('DATABASE_SSL_CIPHER', undefined),
                    rejectUnauthorized: utils_1.env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
                },
            },
            pool: {
                min: utils_1.env.int('DATABASE_POOL_MIN', 2),
                max: utils_1.env.int('DATABASE_POOL_MAX', 10),
            },
        },
        postgres: {
            connection: {
                connectionString: (0, utils_1.env)('DATABASE_URL'),
                host: (0, utils_1.env)('DATABASE_HOST', 'localhost'),
                port: utils_1.env.int('DATABASE_PORT', 5432),
                database: (0, utils_1.env)('DATABASE_NAME', 'strapi'),
                user: (0, utils_1.env)('DATABASE_USERNAME', 'strapi'),
                password: (0, utils_1.env)('DATABASE_PASSWORD', 'strapi'),
                ssl: utils_1.env.bool('DATABASE_SSL', false) && {
                    key: (0, utils_1.env)('DATABASE_SSL_KEY', undefined),
                    cert: (0, utils_1.env)('DATABASE_SSL_CERT', undefined),
                    ca: (0, utils_1.env)('DATABASE_SSL_CA', undefined),
                    capath: (0, utils_1.env)('DATABASE_SSL_CAPATH', undefined),
                    cipher: (0, utils_1.env)('DATABASE_SSL_CIPHER', undefined),
                    rejectUnauthorized: utils_1.env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
                },
                schema: (0, utils_1.env)('DATABASE_SCHEMA', 'public'),
            },
            pool: {
                min: utils_1.env.int('DATABASE_POOL_MIN', 2),
                max: utils_1.env.int('DATABASE_POOL_MAX', 10),
            },
        },
        sqlite: {
            connection: {
                filename: path_1.default.join(__dirname, '..', '..', (0, utils_1.env)('DATABASE_FILENAME', '.tmp/data.db')),
            },
            useNullAsDefault: true,
        },
    };
    return {
        connection: {
            client,
            ...connections[client],
            acquireConnectionTimeout: utils_1.env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
        },
    };
};
//# sourceMappingURL=database.js.map