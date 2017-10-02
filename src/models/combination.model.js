"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/************************************/
/*            INTERFACE             */
/************************************/
var Status;
(function (Status) {
    Status[Status["OK"] = 0] = "OK";
    Status[Status["WARNING"] = 1] = "WARNING";
    Status[Status["NORMAL"] = 2] = "NORMAL";
})(Status = exports.Status || (exports.Status = {}));
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