import { Dialect, Sequelize } from "sequelize";
import { Options } from "sequelize";
import Book from "../models/books"
import dotenv from "dotenv";



dotenv.config();


interface DatabaSeConfig extends Options{
     host?:string,
     dialect?:Dialect
}


interface Db{

     sequelize:Sequelize,
     model?:typeof Book

}


const connectDb=()=>{


        let databaSeConfig :DatabaSeConfig={
             
            host:process.env.DB_HOST,
            dialect:'mysql'

             
        }

    try{

        let sequelize = new Sequelize(
            process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,databaSeConfig
        )

        // @ts-ignore
        let db={
            models:{}
            
        }
        // @ts-ignore
        db.sequelize=sequelize;
        // @ts-ignore
        db.Sequelize=Sequelize;
        // @ts-ignore
        db.models.Book= Book(sequelize);

        return db;




    }catch(e){

       throw new Error(e);
    }
}


let db= connectDb();

export default db;