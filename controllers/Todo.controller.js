const path=require('path');

const {Todo}=require(path.join(__dirname,'..','model','Todo.model'));

const {validationResult}=require('express-validator');

function addTask(req,res){
    const error= validationResult(req).array();
    if(error.length!=0){
        return res.status(400).json(error)
    }

    else{
        Todo.create({
            title:req.body.title,
            description:req.body.description
        })
    
        res.status(200).json({
            input:req.body
        })
    }

};

function getAllTasks(req,res){

    let pageNumber=req.params.page||0;
    let taskPerPage=2;
    Todo.find({})
    .then((results) => {
        return res.status(200).json(results);
    })
}

function updateTask(req,res){

    const titleVariable=req.params.title;

    const todoTitle=req.body.title;

  
   Todo.findOne({title:todoTitle},(errors,output)=>{
    const issue=validationResult(req).array();
    if(issue.length!=0){
        res.status(400).json(issue)
    }else{
        if(errors){
            return res.status(500).json({
                message:'An error occurred while processing your query'
            })
        }
        else if(output){
            return res.status(400).json({
                message:'A task with this title already exists'
            })
        }
        else if(!(output)){
            Todo.findOne({title:titleVariable},(error,outcome)=>{
             if(error){
            return res.json({
                message:'An error occurred'
            })
        }
        else if(!(outcome)){
            res.status(404).json({
                message:'No task with such title exists'
            })
    
        }
    
        else if(outcome){
            Todo.updateOne({title:titleVariable},{$set:req.body},(error)=>{
                if(error){
                    res.status(500).json({
                        message:'An error occurred while updating this record'
                    })
                }else{
                    res.status(200).json({
                        message:'task update was successful'
                    })
                }
            })
        }
    })
        }
    }
   })
   

    

}

function deleteTask (req,res){
    const titleVariable=req.params.title;
    Todo.findOneAndDelete({title:titleVariable}).then(()=>{
        res.status(200).json({
            "message":"task was deleted successfully"
        })
    })
}

module.exports={
    addTask,
    getAllTasks,
    updateTask,
    deleteTask
}