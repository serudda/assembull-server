'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return [
            queryInterface.changeColumn('combination', 'min', {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: true
            }),
            queryInterface.changeColumn('combination', 'max', {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: true
            }),
            queryInterface.changeColumn('combination', 'distance', {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: true
            })
        ];
    },
    down: (queryInterface , Sequelize) => {
        return [
            queryInterface.changeColumn('combination', 'min', {
                type: Sequelize.INTEGER,
                allowNull: true
            }),
            queryInterface.changeColumn('combination', 'max', {
                type: Sequelize.INTEGER,
                allowNull: true
            }),
            queryInterface.changeColumn('combination', 'distance', {
                type: Sequelize.INTEGER,
                allowNull: true
            })
        ];
    }
};