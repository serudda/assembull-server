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
    min: Int
    max: Int
    distance: Int
    status: Status!
}
`;