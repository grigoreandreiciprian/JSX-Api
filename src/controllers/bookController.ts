
import db from "../config/db";

import {Request,Response,RequestHandler} from "express"
import AsyncHandler from "express-async-handler";


const getBooks: RequestHandler = AsyncHandler ((async(req:Request,res:Response)=>{
   
       let books = await db.models.Book.findAll();
   
    res.status(200).json(books);
}))


const addBook: RequestHandler = AsyncHandler ((async(req:Request,res:Response)=>{
    
   await db.models.Book.create(req.body);


    res.status(200).end()
}))


const updateBook : RequestHandler = AsyncHandler ((async(req:Request,res:Response)=>{
       
    console.log("aici")
     let {id}= req.params
     let book = db.models.Book.findByPk(id)

     if(book){
        (await book).set(req.body)
     }
       
     (await book).save()
     res.status(200).end()
}))


const deleteBook : RequestHandler = AsyncHandler ((async(req:Request,res:Response)=>{

    let {id} = req.params
    let book = db.models.Book.findByPk(id)

    if(book){

        (await book).destroy()
    }

    (await book).save()

    res.status(200).end()
}))

export {getBooks, addBook, updateBook, deleteBook}