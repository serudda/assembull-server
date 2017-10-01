/**************************************/
/*            DEPENDENCIES            */
/**************************************/
import { models } from './../../models/index';
import { IThing } from './../../models/thing.model';


/************************************/
/*            INTERFACES            */
/************************************/
interface ICreateThingArgs {
    input: IThing;
}


/*****************************************/
/*         UI COMPONENT MUTATION         */
/*****************************************/

export const typeDef = `

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

export const resolver = {
    Mutation: {
        createThing(root: any, args: ICreateThingArgs) {
            return models.Thing.create({
                name: args.input.name,
            });
        },
    },
};