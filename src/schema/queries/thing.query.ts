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


query getUiComponentById($uiComponentId : ID!) {
    uiComponent(id: $uiComponentId) {
        id
        name
        css
        scss
        html
        background
        download
        __typename
        colorPalette {
            id
            category
            description
            __typename
            colors {
                id
                hex
                label
                __typename
            }
        }
    }
}
*/