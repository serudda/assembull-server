/************************************/
/*            INTERFACE             */
/************************************/
export interface IServerConfig {
    port: number;
    session: {
        secret: string,
        name: string,
        resave: boolean,
        saveUninitialized: boolean,
        proxy: boolean
    };
}


/****************************************/
/*            SERVER CONFIG             */
/****************************************/
export const serverConfig: IServerConfig = {
    port: 4000,
    session: {
        secret: 'assembull_db',
        name: 'assembull-server',
        resave: false,
        saveUninitialized: false,
        proxy: false
    }
};