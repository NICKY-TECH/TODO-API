const mongoose=require('mongoose');

const mongoosePaginate=require('mongoose-paginate');

const TodoSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String,
    },
    description:{
        required:true,
        type:String
    }
},
{timestamps:true}
);

TodoSchema.plugin(mongoosePaginate);

const Todo=mongoose.model('Todo',TodoSchema);


module.exports={
    Todo
}

