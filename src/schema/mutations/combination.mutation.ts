/**************************************/
/*            DEPENDENCIES            */
/**************************************/
import { models } from './../../models/index';
import { ICombination, Status } from './../../models/combination.model';


/************************************/
/*            INTERFACES            */
/************************************/

interface ICombinationArgs {
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
    status: Status!
}

input UpdateCombinationInput {
    id: ID!
    label: String
    min: Int
    max: Int
    distance: Int
    status: Status!
}

# Mutations
extend type Mutation {
    addCombination(input: CreateCombinationInput!): Combination
    updateCombination(input: UpdateCombinationInput!): Combination
}

`;


/*****************************************/
/*     COMBINATION MUTATION RESOLVER     */
/*****************************************/

export const resolver = {
    Mutation: {
        addCombination(root: any, args: ICombinationArgs) {
            return models.Combination.create(
                {
                    label: args.input.label,
                    min: args.input.min,
                    max: args.input.max,
                    distance: args.input.distance,
                    status: args.input.status,
                }
            )
            .then(
                (result) => {
                    /* NOTE: Sequelize returns an array with two elements 
                       The first element is always the number of affected 
                       rows, while the second element is the actual affected rows:
                       result[1][0].dataValues
                       */
                    return result;
                }
            ).catch(
                (e) => {
                    console.log('ERROR: addCombination: ', e);
                }
            );
        },

        updateCombination(root: any, args: ICombinationArgs) {
            return models.Combination.update(
                {
                    label: args.input.label,
                    min: args.input.min,
                    max: args.input.max,
                    distance: args.input.distance,
                    status: args.input.status,
                },
                {
                    // activate returns the object updated
                    returning: true,
                    where: { id: args.input.id }
                }
            )
            .then(
                (result) => {
                    /* NOTE: Sequelize returns an array with two elements 
                       The first element is always the number of affected 
                       rows, while the second element is the actual affected rows:
                       result[1][0].dataValues
                       */
                    return result[1][0].dataValues;
                }
            ).catch(
                (e) => {
                    console.log('ERROR: updateCombination: ', e);
                }
            );
        },
    },
};


/* 

Mutations:

ADD COMBINATION
mutation addCombination($input: CreateCombinationInput!){
  addCombination(input: $input) {
    id
  }
}

Query Variables:
{
  "input": {
    "label": "Silla",
    "min": 12,
    "status": "NORMAL"
  }
}

UPDATE COMBINATION
mutation updateCombination($input: UpdateCombinationInput!){
    updateCombination(input: $input) {
      id
      min
    }
}

Query Variables:
{
  "input": {"id": 1, "min": 20, "status": "OK"}
}

*/