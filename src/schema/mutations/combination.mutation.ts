/**************************************/
/*            DEPENDENCIES            */
/**************************************/
import { models } from './../../models/index';
import { ICombination } from './../../models/combination.model';


/************************************/
/*            INTERFACES            */
/************************************/
    
interface ICreateCombinationArgs {
    input: ICombination;
}


/****************************************/
/*     COMBINATION MUTATION TYPEDEF     */
/****************************************/

export const typeDef = `

# Input
input CreateCombinationInput {
    label: String
    min: Int
    max: Int
    distance: Int
}

# Mutations
extend type Mutation {
    addCombination(input: CreateCombinationInput!): Combination
}

`;


/*****************************************/
/*     COMBINATION MUTATION RESOLVER     */
/*****************************************/

export const resolver = {
    Mutation: {
        addCombination(root: any, args: ICreateCombinationArgs) {
            return models.Combination.create({
                label: args.input.label,
                min: args.input.min,
                max: args.input.max,
                distance: args.input.distance,
            });
        },
    },
};