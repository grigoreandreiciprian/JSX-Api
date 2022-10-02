import {DataTypes, Model, Sequelize} from "sequelize"

export interface BookAttributes{
    id?:number | null
    title:string
    author:string
    gendre:string
    year:number
}

export default (sequelize)=>{
    class Book extends Model<BookAttributes>{};

    Book.init({

        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        }, 

        title:{
            type:DataTypes.STRING,
            allowNull:false,

            validate:{

                notNull:{
                    msg:'Plase provide a value for title'
                },
                notEmpty:{
                    msg:'Plase provide a value for "title',
                },
            },
        },
             
        author:{
            type:DataTypes.STRING,
            allowNull:false,

            validate:{
                notNull:{
                    msg:'Plase provide a value for author',
                },
                notEmpty:{
                    msg:'Plase provide a value for author'
                }

            }
        },

        gendre:{
            type:DataTypes.STRING,
        },

        year:{
            type:DataTypes.INTEGER
        }


    },{
        sequelize,
        
    });

    return Book;
}