const express = require("express");
const router = express.Router();

const todo = require("../../models/todo");

router.get('/', (req,res) => {
    todo.find((err, todo) => {
        if(err){
            console.log(err);
        } else {
            res.json(todo)
        }
    });
});


router.get('/:id', (req,res) =>{
    let id = req.params.id;
    todo.findById(id, (err,todo) => {
        res.json(todo);
    });
});

router.post('/add', (req,res)=>{
    let todoSave = new todo(req.body);
    todoSave.save()
        .then(todo=>{
            res.status(200).json({'todo':'todo added successfully'})
        })
        .catch(err=>{
            console.log(err);
        });
});

router.post('/update/:id', (req,res)=>{
    todo.findById(req.params.id, (err,todo) => {
        if(!todo) {
            res.status(404).status("data not found");
        } else {
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo=>{
                res.json('todo completed')
            }).catch(err=> {
                res.status(400).send("update not finished")
            })
        }
    })
})

module.exports = router;