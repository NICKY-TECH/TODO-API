const express=require('express');

const todoRoute=express.Router();

const path=require('path');

const {check}=require('express-validator');

const TodoController=require(path.join(__dirname,'..','controllers','Todo.controller'));



todoRoute.post('/',[
    check('title')
    .notEmpty()
    .withMessage('the title field cannot be empty'),
    check('description')
    .notEmpty()
    .withMessage('the description field cannot be empty')
],TodoController.addTask);

todoRoute.get('/',TodoController.getAllTasks);

todoRoute.patch('/:title',TodoController.updateTask);

todoRoute.delete('/:title',TodoController.deleteTask);





module.exports={
    todoRoute
}