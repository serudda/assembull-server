"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************/
/*            DEPENDENCIES             */
/***************************************/
const database_config_1 = require("./database-config");
const logging_config_1 = require("./logging-config");
const server_config_1 = require("./server-config");
/***************************************/
/*            CONFIG CLASS             */
/***************************************/
class Config {
    /*       CONSTRUCTOR      */
    /**************************/
    constructor() {
        this._databaseConfig = database_config_1.databaseConfig;
        this._loggingConfig = logging_config_1.loggingConfig;
        this._serverConfig = server_config_1.serverConfig;
    }
    /*       METHODS       */
    /***********************/
    getDatabaseConfig() {
        return this._databaseConfig;
    }
    getLoggingConfig() {
        return this._loggingConfig;
    }
    getServerConfig() {
        return this._serverConfig;
    }
}
/* Export Config instance */
exports.config = new Config();
//# sourceMappingURL=config.js.map