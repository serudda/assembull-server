"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**************************************/
/*            DEPENDENCIES            */
/**************************************/
const index_1 = require("./../../models/index");
/*****************************************/
/*         UI COMPONENT MUTATION         */
/*****************************************/
exports.typeDef = `

# Input
input CreateThingInput {
    name: String
    parts: [CreatePartInput]
}

# Mutations
extend type Mutation {
    createThing(input: CreateThingInput!): Thing
}

`;
exports.resolver = {
    Mutation: {
        createThing(root, args) {
            return index_1.models.Thing.create({
                name: args.input.name,
            });
        },
    },
};
//# sourceMappingURL=thing.mutation.js.map