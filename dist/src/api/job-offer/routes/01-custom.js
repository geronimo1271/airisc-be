"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'GET',
            path: '/job-offers/configuration',
            handler: 'job-offer.configuration',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/job-offers/search',
            handler: 'job-offer.search',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
//# sourceMappingURL=01-custom.js.map