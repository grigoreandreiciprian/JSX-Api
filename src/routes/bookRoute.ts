import express from'express'

import {getBooks,addBook,updateBook,deleteBook} from "../controllers/bookController"

import errorHandler from '../midleware/errorHandler';

const router=express.Router();



router.route("/").get(getBooks , errorHandler);
router.route("/").post(addBook,errorHandler);
router.route("/:id").put(updateBook,errorHandler)
router.route("/:id").delete(deleteBook,errorHandler)



export default router