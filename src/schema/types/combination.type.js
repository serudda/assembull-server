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
    min: Int
    max: Int
    distance: Int
    status: Status!
}
`;
//# sourceMappingURL=combination.type.js.map