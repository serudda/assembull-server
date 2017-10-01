"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*****************************************/
/*              COLOR MODEL              */
/*****************************************/
function default_1(sequelize, dataTypes) {
    let Combination = sequelize.define('Combination', {
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
        }
    }, {
        timestamps: true,
        tableName: 'combination',
        freezeTableName: true,
    });
    /*      CREATE RELATIONSHIP      */
    /*********************************/
    Combination.associate = (models) => {
        Combination.belongsTo(models.Part, {
            foreignKey: 'partId',
            onDelete: 'CASCADE'
        });
    };
    return Combination;
}
exports.default = default_1;
//# sourceMappingURL=combination.model.js.map