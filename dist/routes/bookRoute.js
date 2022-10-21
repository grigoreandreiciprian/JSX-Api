"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const errorHandler_1 = __importDefault(require("../midleware/errorHandler"));
const router = express_1.default.Router();
router.route("/").get(bookController_1.getBooks, errorHandler_1.default);
router.route("/").post(bookController_1.addBook, errorHandler_1.default);
router.route("/:id").put(bookController_1.updateBook, errorHandler_1.default);
router.route("/:id").delete(bookController_1.deleteBook, errorHandler_1.default);
exports.default = router;
//# sourceMappingURL=bookRoute.js.map