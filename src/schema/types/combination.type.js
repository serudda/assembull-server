"use strict";
/************************************/
/*         COMBINATION TYPE         */
/************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDef = `
enum Status {
    OK
    WARNING
    NORMAL
}

type Combination {
    id: ID!
    label: String
    min: Float
    max: Float
    distance: Float
    status: Status
}
`;
//# sourceMappingURL=combination.type.js.map