/**************************************/
/*            DEPENDENCIES            */
/**************************************/
import { models } from './../../models/index';
import { IPart } from './../../models/part.model';


/************************************/
/*            INTERFACES            */
/************************************/
interface ICreatePartArgs {
    input: IPart;
}


/************************************************/
/*             PART MUTATION TYPEDEF            */
/************************************************/

export const typeDef = `

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

export const resolver = {
    Mutation: {
        createPart(root: any, args: ICreatePartArgs) {
            return models.Part.create({
                label: args.input.label
            });
        },
    },
};