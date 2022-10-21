"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Book extends sequelize_1.Model {
}
exports.Book = Book;
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
    year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Plase provide a value for author',
            },
            notEmpty: {
                msg: 'Plase provide a value for author'
            }
        }
    }
}, {
    sequelize: db_1.default,
    tableName: "books",
    createdAt: false,
    timestamps: false,
});
exports.default = Book;
//# sourceMappingURL=books.js.map