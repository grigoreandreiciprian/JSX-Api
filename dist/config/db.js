"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const books_1 = __importDefault(require("../models/books"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDb = () => {
    try {
        let sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        });
        let db = {
            models: {}
        };
        db.sequelize = sequelize;
        db.Sequelize = sequelize_1.Sequelize;
        db.models.Book = (0, books_1.default)(sequelize);
        return db;
    }
    catch (e) {
        throw new Error(e);
    }
};
let db = connectDb();
exports.default = db;
//# sourceMappingURL=db.js.map