/************************************/
/*           DEPENDENCIES           */
/************************************/
import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

import { loggingConfig } from './../config/logging-config';

import * as combinationMutation from './mutations/combination.mutation';
import * as combinationQuery from './queries/combination.query';
import * as combinationTypes from './types/combination.type';

import * as partMutation from './mutations/part.mutation';
import * as partQuery from './queries/part.query';
import * as partTypes from './types/part.type';

import * as thingMutation from './mutations/thing.mutation';
import * as thingQuery from './queries/thing.query';
import * as thingTypes from './types/thing.type';


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
const resolvers: any = merge(
    combinationMutation.resolver,
    combinationQuery.resolver,
    partMutation.resolver,
    partQuery.resolver,
    thingMutation.resolver,
    thingQuery.resolver,
);


/*****************************************/
/*         SIMPLE LOGGER SYSTEM          */
/*****************************************/
/* TODO: Agregar un simple de log mas robusto para que me 
    facilite ver los errores del server */
const logger = { log: (error: Error) => console.log(error) };


/*****************************************/
/*                SCHEMA                 */
/*****************************************/
const schema = makeExecutableSchema({
  logger,
  resolvers: resolvers,
  typeDefs: typeDefs,
});

export default schema;