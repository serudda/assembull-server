/************************************/
/*           DEPENDENCIES           */
/************************************/
import * as SequelizeStatic from 'sequelize';
import { Instance, DataTypes, Sequelize } from 'sequelize';
import { SequelizeModels } from './index';


/************************************/
/*            INTERFACE             */
/************************************/

export enum Status {
    OK,
    WARNING,
    NORMAL
}

export interface ICombination {
    id: number | null;
    label: string;
    min: number;
    max: number;
    distance: number;
    status: Status;
}


export interface ICombinationAttributes {
    label: string;
    min: number;
    max: number;
    distance: number;
    status: Status;
}


export interface ICombinationInstance extends Instance<ICombinationAttributes> {
    dataValues: ICombinationAttributes;
}


/*****************************************/
/*              COLOR MODEL              */
/*****************************************/
export default function(sequelize: Sequelize, dataTypes: DataTypes): 
SequelizeStatic.Model<ICombinationInstance, ICombinationAttributes> {
    
    let Combination: any = sequelize.define<ICombinationInstance, ICombinationAttributes>(
        'Combination', {
            label: {
                type: dataTypes.STRING,
                allowNull: true
            },
            min: {
                type: dataTypes.INTEGER,
                allowNull: true
            },
            max: {
                type: dataTypes.INTEGER,
                allowNull: true
            },
            distance: {
                type: dataTypes.INTEGER,
                allowNull: true
            },
            status: {
                type: dataTypes.ENUM,
                values: ['OK', 'WARNING', 'NORMAL'],
                allowNull: false,
                defaultValue: 'NORMAL'
            }
        }, {
            timestamps: true,
            tableName: 'combination',
            freezeTableName: true,
        }
    );

    
    /*      CREATE RELATIONSHIP      */
    /*********************************/
    Combination.associate = (models: SequelizeModels) => {
        Combination.belongsTo(models.Part, {
            foreignKey: 'partId',
            onDelete: 'CASCADE'
        });
    };


    return Combination;

}