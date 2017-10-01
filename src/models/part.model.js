"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*****************************************/
/*              PART MODEL               */
/*****************************************/
function default_1(sequelize, dataTypes) {
    let Part = sequelize.define('Part', {
        label: {
            type: dataTypes.STRING,
            allowNull: true
        },
    }, {
        timestamps: true,
        tableName: 'part',
        freezeTableName: true,
    });
    /*      CREATE RELATIONSHIP      */
    /*********************************/
    Part.associate = (models) => {
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
exports.default = default_1;
//# sourceMappingURL=part.model.js.map