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
//# sourceMappingURL=thing.query.js.map