"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Book extends sequelize_1.Model {
    }
    ;
    Book.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Plase provide a value for title'
                },
                notEmpty: {
                    msg: 'Plase provide a value for "title',
                },
            },
        },
        author: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Plase provide a value for author',
                },
                notEmpty: {
                    msg: 'Plase provide a value for author'
                }
            }
        },
        gendre: {
            type: sequelize_1.DataTypes.STRING,
        },
        year: {
            type: sequelize_1.DataTypes.INTEGER
        }
    }, {
        sequelize,
    });
    return Book;
};
//# sourceMappingURL=books.js.map