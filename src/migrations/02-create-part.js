'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('part', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            label: {
                type: Sequelize.STRING,
                allowNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            thingId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'thing',
                    key: 'id',
                    as: 'thingId',
                }
            }
        }, {
            tableName: 'part',
            freezeTableName: true,
        });
    },
    down: (queryInterface /* , Sequelize */) => {
        return queryInterface.dropTable('part');
    }
};