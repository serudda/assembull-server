"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/************************************/
/*           DEPENDENCIES           */
/************************************/
const index_1 = require("./../../models/index");
/**************************************/
/*         THING QUERY TYPEDEF        */
/**************************************/
exports.typeDef = `
    # Root Query
    extend type Query {
        things: [Thing]
        thing(id: ID!): Thing
    }
`;
/*******************************************/
/*           THING QUERY RESOLVER          */
/*******************************************/
exports.resolver = {
    Query: {
        things() {
            return index_1.models.Thing.findAll();
        },
        thing(root, { id }) {
            return index_1.models.Thing.findById(id);
        },
    },
    Thing: {
        parts(thing) {
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
//# sourceMappingURL=thing.query.js.map