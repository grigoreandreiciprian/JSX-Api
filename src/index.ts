 import express from "express";

 import cors from "cors"

 import dotenv from "dotenv"


 let app = express()

 dotenv.config()


 app.use(express.json())
 app.use(cors())


 app.listen(3020, async()=>{

    console.log("Express server is listening")

 })




