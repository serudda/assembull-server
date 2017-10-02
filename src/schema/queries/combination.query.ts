/************************************/
/*           DEPENDENCIES           */
/************************************/
import { models, sequelize } from './../../models/index';


/************************************/
/*            INTERFACES            */
/************************************/    
interface ICombinationArgs {
    id: number;
}


/****************************************/
/*       COMBINATION QUERY TYPEDEF      */
/****************************************/

export const typeDef = `
    # Root Query
    extend type Query {
        combinations: [Combination]
        combination(id: ID!): Combination
    }
`;


/****************************************/
/*      COMBINATION QUERY RESOLVER      */
/****************************************/

export const resolver = {
    Query: {
        combinations() {
            return models.Combination.findAll();
        },
        combination(root: any, { id }: ICombinationArgs) {
            return models.Combination.findById(id);
        },
    }
};


/* 

Queries:


query getCombinationById($combinationId : ID!) {
    combination(id: $combinationId) {
        id
        label
        min
        max
        distance
        status
        __typename
    }
}
*/