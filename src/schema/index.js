"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/************************************/
/*           DEPENDENCIES           */
/************************************/
const lodash_1 = require("lodash");
const graphql_tools_1 = require("graphql-tools");
const combinationMutation = require("./mutations/combination.mutation");
const combinationQuery = require("./queries/combination.query");
const combinationTypes = require("./types/combination.type");
const partMutation = require("./mutations/part.mutation");
const partQuery = require("./queries/part.query");
const partTypes = require("./types/part.type");
const thingMutation = require("./mutations/thing.mutation");
const thingQuery = require("./queries/thing.query");
const thingTypes = require("./types/thing.type");
/**********************************/
/*           ROOT TYPES           */
/**********************************/
const typeDefs = [`

    # Type
    type Base {
        id: ID!
        base: String
    }

    # Input
    input CreateBaseInput {
        base: String
    }
    
    # Query
    type Query {
        base: [Base]
    }

    # Mutations
    type Mutation {
        createBase(input: CreateBaseInput!): Base
    }

    # Main Schema
    schema {
        query: Query
        mutation: Mutation
    }
`,
    partTypes.typeDef,
    partQuery.typeDef,
    partMutation.typeDef,
    thingTypes.typeDef,
    thingQuery.typeDef,
    thingMutation.typeDef,
    combinationTypes.typeDef,
    combinationQuery.typeDef,
    combinationMutation.typeDef,
];
/*****************************************/
/*             ROOT RESOLVERS            */
/*****************************************/
const resolvers = lodash_1.merge(combinationMutation.resolver, combinationQuery.resolver, partMutation.resolver, partQuery.resolver, thingMutation.resolver, thingQuery.resolver);
/*****************************************/
/*         SIMPLE LOGGER SYSTEM          */
/*****************************************/
/* TODO: Agregar un simple de log mas robusto para que me
    facilite ver los errores del server */
const logger = { log: (error) => console.log(error) };
/*****************************************/
/*                SCHEMA                 */
/*****************************************/
const schema = graphql_tools_1.makeExecutableSchema({
    logger,
    resolvers: resolvers,
    typeDefs: typeDefs,
});
exports.default = schema;
//# sourceMappingURL=index.js.map