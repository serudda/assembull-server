/************************************/
/*         COMBINATION TYPE         */
/************************************/

export const typeDef = `
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