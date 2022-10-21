import { Sequelize } from "sequelize"
import * as dotenv from "dotenv";


dotenv.config();

let sequelize = new Sequelize(
    'libraryJSX', 'root', '582426',
    {
        host:'localhost',
        dialect:'mysql',
    }
)


sequelize.model


export default sequelize