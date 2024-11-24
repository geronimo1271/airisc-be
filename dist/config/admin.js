"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@strapi/utils");
exports.default = () => ({
    auth: {
        secret: (0, utils_1.env)('ADMIN_JWT_SECRET'),
    },
    apiToken: {
        salt: (0, utils_1.env)('API_TOKEN_SALT'),
    },
    transfer: {
        token: {
            salt: (0, utils_1.env)('TRANSFER_TOKEN_SALT'),
        },
    },
    flags: {
        nps: utils_1.env.bool('FLAG_NPS', true),
        promoteEE: utils_1.env.bool('FLAG_PROMOTE_EE', true),
    },
});
//# sourceMappingURL=admin.js.map