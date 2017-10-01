"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/************************************/
/*           DEPENDENCIES           */
/************************************/
const index_1 = require("./../../models/index");
/****************************************/
/*       COMBINATION QUERY TYPEDEF      */
/****************************************/
exports.typeDef = `
    # Root Query
    extend type Query {
        combinations: [Combination]
        combination(id: ID!): Combination
    }
`;
/****************************************/
/*      COMBINATION QUERY RESOLVER      */
/****************************************/
exports.resolver = {
    Query: {
        combinations() {
            return index_1.models.Combination.findAll();
        },
        combination(root, { id }) {
            return index_1.models.Combination.findById(id);
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
        __typename
    }
}
*/ 
//# sourceMappingURL=combination.query.js.map