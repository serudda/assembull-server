/************************************/
/*           DEPENDENCIES           */
/************************************/
import { models, sequelize } from './../../models/index';


/************************************/
/*            INTERFACES            */
/************************************/
interface IPartArgs {
    id: number;
}


/**************************************/
/*        PART QUERY TYPEDEF          */
/**************************************/

export const typeDef = `
    # Root Query
    extend type Query {
        parts: [Part]
        part(id: ID!): Part
    }
`;


/********************************************/
/*           PART QUERY RESOLVER            */
/********************************************/

export const resolver = {
    Query: {
        parts() {
            return models.Part.findAll();
        },
        part(root: any, { id }: IPartArgs) {
            return models.Part.findById(id);
        },
    },
    Part: {
        combinations(part: any) {
            return part.getCombination();
        },
    },
};



/* 

Queries:


query getPartById($partId : ID!) {
    part(id: $partId) {
        id
        label
        combinations {
            id
            label
            min
            max
            distance
            __typename
        }
        __typename
    }
}

*/