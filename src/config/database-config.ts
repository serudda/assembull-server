/************************************/
/*            INTERFACE             */
/************************************/
export interface IDatabaseConfig {
    username: string;
    password: string;
    database: string;
    host: string;
    port: any;
    dialect: string;
    logging: boolean | Function;
}


var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

/****************************************/
/*            DATABASE CONFIG           */
/****************************************/
/* FIXME: El comando: 
    sequelize db:migrate 
No estaba funcionando si asignaba este archivo en '.sequelizerc' como
configuracion de la base de datos. Lo correcto es que tome este mismo
archivo como configuración, pero como arrojaba error, tuve que crear un
'database-config.json', asi que cuando corro: npm run server, se configura
enciende el server tomando este archivo como config de  la base, pero cuando
quiero lanzar un migrate: sequelize db:migrate, toma la configuracion del .json.
Buscar una solucion para sea el caso que sea siempre tome este archivo.*/
export const databaseConfig: IDatabaseConfig = {
    username: 'rahfutqyapzjsm', // PRD
    password: 'd2d2283821c67adc6411cc9e8c603a41b5773b483beac29c0abb604bd1bff975', // PRD
    database: 'd1nosrscm1ia7a', // PRD
    port:     match[4], // PRD
    host:     match[3], // PRD
    // username: 'sergioruizdavila', // DEV
    // password: 'admin', // DEV
    // database: 'assembull_db', // DEV
    // host: '127.0.0.1',  // DEV
    // port: process.env.PORT || 5432, // DEV
    dialect: 'postgres',
    logging: true
};