"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**************************************/
/*            DEPENDENCIES            */
/**************************************/
const index_1 = require("./../../models/index");
/************************************************/
/*             PART MUTATION TYPEDEF            */
/************************************************/
exports.typeDef = `

# Input
input CreatePartInput {
    label: String,
    combinations: [CreateCombinationInput]
}

# Mutations
extend type Mutation {
    createPart(input: CreatePartInput!): Part
}

`;
/************************************************/
/*           PART MUTATION RESOLVER             */
/************************************************/
exports.resolver = {
    Mutation: {
        createPart(root, args) {
            return index_1.models.Part.create({
                label: args.input.label
            });
        },
    },
};
//# sourceMappingURL=part.mutation.js.map