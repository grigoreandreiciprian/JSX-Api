"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addBook = exports.getBooks = void 0;
const db_1 = __importDefault(require("../config/db"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const getBooks = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let books = yield db_1.default.models.Book.findAll();
    res.status(200).json(books);
})));
exports.getBooks = getBooks;
const addBook = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.models.Book.create(req.body);
    res.status(200).end();
})));
exports.addBook = addBook;
const updateBook = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("aici");
    let { id } = req.params;
    let book = db_1.default.models.Book.findByPk(id);
    if (book) {
        (yield book).set(req.body);
    }
    (yield book).save();
    res.status(200).end();
})));
exports.updateBook = updateBook;
const deleteBook = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let book = db_1.default.models.Book.findByPk(id);
    if (book) {
        (yield book).destroy();
    }
    (yield book).save();
    res.status(200).end();
})));
exports.deleteBook = deleteBook;
//# sourceMappingURL=bookController.js.map