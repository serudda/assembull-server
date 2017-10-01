/************************************/
/*            THING TYPE            */
/************************************/

export const typeDef = `
type Thing {
    id: ID!
    name: String
    parts: [Part]
}
`;