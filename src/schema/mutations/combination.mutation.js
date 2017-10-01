"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**************************************/
/*            DEPENDENCIES            */
/**************************************/
const index_1 = require("./../../models/index");
/****************************************/
/*     COMBINATION MUTATION TYPEDEF     */
/****************************************/
exports.typeDef = `

# Input
input CreateCombinationInput {
    label: String
    min: Int
    max: Int
    distance: Int
}

# Mutations
extend type Mutation {
    addCombination(input: CreateCombinationInput!): Combination
}

`;
/*****************************************/
/*     COMBINATION MUTATION RESOLVER     */
/*****************************************/
exports.resolver = {
    Mutation: {
        addCombination(root, args) {
            return index_1.models.Combination.create({
                label: args.input.label,
                min: args.input.min,
                max: args.input.max,
                distance: args.input.distance,
            });
        },
    },
};
//# sourceMappingURL=combination.mutation.js.map