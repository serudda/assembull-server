'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('combination', {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            label: {
                type: Sequelize.STRING,
                allowNull: true
            },
            min: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            max: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            distance: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            status: {
                type: Sequelize.ENUM('OK', 'WARNING', 'NORMAL'),
                defaultValue: 'NORMAL',
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            partId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'part',
                    key: 'id',
                    as: 'partId',
                }
            }
        }, {
            tableName: 'combination',
            freezeTableName: true,
        });
    },
    down: (queryInterface /* , Sequelize */) => {
        return queryInterface.dropTable('combination');
    }
};