"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************/
/*            SERVER CONFIG             */
/****************************************/
exports.serverConfig = {
    port: 4000,
    session: {
        secret: 'assembull_db',
        name: 'assembull-server',
        resave: false,
        saveUninitialized: false,
        proxy: false
    }
};
//# sourceMappingURL=server-config.js.map