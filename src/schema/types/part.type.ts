/************************************/
/*            PART TYPE             */
/************************************/

export const typeDef = `
type Part {
    id: ID!
    label: String
    combinations: [Combination]
}
`;