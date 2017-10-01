/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as SequelizeStatic from 'sequelize';
import { Instance, DataTypes, Sequelize } from 'sequelize';
import { SequelizeModels } from './index';

import { IPart } from './part.model';


/************************************/
/*            INTERFACE             */
/************************************/

export interface IThing {
    id: number | null;
    name: string;
    parts: Array<IPart>;
}


export interface IThingAttributes {
    name: string;
}


export interface IThingInstance extends Instance<IThingAttributes> {
    dataValues: IThingAttributes;
}


/*****************************************/
/*           UI COMPONENT MODEL          */
/*****************************************/
export default function(sequelize: Sequelize, dataTypes: DataTypes): 
SequelizeStatic.Model<IThingInstance, IThingAttributes> {

    let Thing: any = sequelize.define<IThingInstance, IThingAttributes>(
        'Thing', {
            name: {
                type: dataTypes.STRING,
                allowNull: true
            },
        }, 
        {
            timestamps: true,
            tableName: 'thing',
            freezeTableName: true
        }
    );


    /*      CREATE RELATIONSHIP      */
    /*********************************/
    Thing.associate = (models: SequelizeModels) => {

        Thing.hasMany(models.Part, {
            foreignKey: 'thingId',
            as: 'part'
        });

    };


    return Thing;
    
}