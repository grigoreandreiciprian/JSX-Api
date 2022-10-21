 import express from "express";

 import dotenv from "dotenv"
import db from "./config/db";

import Book from "./models/books"

import router from "./routes/bookRoute"

import cors from "cors"


 dotenv.config()

 let app = express()

 app.use(cors())
 

 app.use(express.json())


 app.use("/api/v1/books", router)

 

 db.sync().then((()=>{

  Book.sync().then(()=>{

      app.listen(3020,async()=>{

          console.log("Express server is listening on port 3020 ");
      })
  })

 
})).catch(e=>{

   console.log(e.message);
});
 