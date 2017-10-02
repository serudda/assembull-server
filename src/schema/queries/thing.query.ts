/************************************/
/*           DEPENDENCIES           */
/************************************/
import { models, sequelize } from './../../models/index';


/************************************/
/*            INTERFACES            */
/************************************/    
interface IThingArgs {
    id: number;
}


/**************************************/
/*         THING QUERY TYPEDEF        */
/**************************************/

export const typeDef = `
    # Root Query
    extend type Query {
        things: [Thing]
        thing(id: ID!): Thing
    }
`;


/*******************************************/
/*           THING QUERY RESOLVER          */
/*******************************************/

export const resolver = {
    Query: {
        things() {
            return models.Thing.findAll();
        },
        thing(root: any, { id }: IThingArgs) {
            return models.Thing.findById(id);
        },
    },
    Thing: {
        parts(thing: any) {
            return thing.getPart();
        }, 
    },
};



/* 

Queries:


query getThingById($thingId : ID!) {
    thing(id: $thingId) {
        id
        name
        __typename
        parts {
            id
            label
            __typename
            combinations {
                id
                label
                min
                max
                distance
                __typename
            }
        }
    }
}
*/