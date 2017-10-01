/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as SequelizeStatic from 'sequelize';
import { Instance, DataTypes, Sequelize } from 'sequelize';
import { ICombination } from './combination.model';
import { SequelizeModels } from './index';


/************************************/
/*            INTERFACE             */
/************************************/
export interface IPart {
    id: number | null;
    label: string;
    combinations: Array<ICombination>;
}


export interface IPartAttributes {
    label: string;
}


export interface IPartInstance extends Instance<IPartAttributes> {
    dataValues: IPartAttributes;
}


/*****************************************/
/*              PART MODEL               */
/*****************************************/
export default function(sequelize: Sequelize, dataTypes: DataTypes): 
SequelizeStatic.Model<IPartInstance, IPartAttributes> {

    let Part: any = sequelize.define<IPartInstance, IPartAttributes>(
        'Part', {
            label: {
                type: dataTypes.STRING,
                allowNull: true
            },
        }, {
            timestamps: true,
            tableName: 'part',
            freezeTableName: true,
        }
    );


    /*      CREATE RELATIONSHIP      */
    /*********************************/
    Part.associate = (models: SequelizeModels) => {
        Part.hasMany(models.Combination, {
            foreignKey: 'partId',
            as: 'combination'
        });

        Part.belongsTo(models.Thing, {
            foreignKey: 'thingId',
            onDelete: 'CASCADE'
        });
    };


    return Part;

}