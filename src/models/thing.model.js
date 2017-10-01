"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*****************************************/
/*           UI COMPONENT MODEL          */
/*****************************************/
function default_1(sequelize, dataTypes) {
    let Thing = sequelize.define('Thing', {
        name: {
            type: dataTypes.STRING,
            allowNull: true
        },
    }, {
        timestamps: true,
        tableName: 'thing',
        freezeTableName: true
    });
    /*      CREATE RELATIONSHIP      */
    /*********************************/
    Thing.associate = (models) => {
        Thing.hasMany(models.Part, {
            foreignKey: 'thingId',
            as: 'part'
        });
    };
    return Thing;
}
exports.default = default_1;
//# sourceMappingURL=thing.model.js.map