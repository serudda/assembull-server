"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/************************************/
/*           DEPENDENCIES           */
/************************************/
const index_1 = require("./../../models/index");
/**************************************/
/*        PART QUERY TYPEDEF          */
/**************************************/
exports.typeDef = `
    # Root Query
    extend type Query {
        parts: [Part]
        part(id: ID!): Part
    }
`;
/********************************************/
/*           PART QUERY RESOLVER            */
/********************************************/
exports.resolver = {
    Query: {
        parts() {
            return index_1.models.Part.findAll();
        },
        part(root, { id }) {
            return index_1.models.Part.findById(id);
        },
    },
    Part: {
        combinations(part) {
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
//# sourceMappingURL=part.query.js.map