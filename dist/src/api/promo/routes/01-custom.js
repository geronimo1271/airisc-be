"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'POST',
            path: '/promos/import',
            handler: 'promo.import',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
//# sourceMappingURL=01-custom.js.map