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


// var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

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
    // username: 'lgitfxqxcmmqox', // PRD
    // password: 'dbd65a1bc01384d08aa148ecb8e0e937b2ed15214c15e09c9a79f6e4f87661d1', // PRD
    // database: 'd6g22ske5oult0', // PRD
    // host: 'stylepills-server.herokuapp.com', // PRD
    // port:     match[4], // PRD
    // host:     match[3], // PRD
    username: 'sergioruizdavila', // DEV
    password: 'admin', // DEV
    database: 'assembull_db', // DEV
    host: '127.0.0.1',  // DEV
    port: process.env.PORT || 5432, // DEV
    dialect: 'postgres',
    logging: true
};