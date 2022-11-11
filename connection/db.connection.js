require('dotenv').config();

const mongoose=require('mongoose');



const dbConnection=mongoose.connect(`mongodb+srv://JUST:${process.env.PASSWORD}@author.kqyvmeq.mongodb.net/Auth?retryWrites=true&w=majority`);


module.exports={
    dbConnection
}