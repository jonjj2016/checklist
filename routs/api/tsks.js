const express = require("express");
const router = express.Router()

const Post = require('../../modals/Post')
router.get('/post', (req, res) => {
    res.send({
        name: "Jon"
    })
})


router.post('/post', (req, res) => {

    const newTask = new Post({
        title: req.body.title,
        level: req.body.level,
        description: req.body.description,
        tasks: req.body.tasks
    })
    newTask.save().then(task => {
        if (!task) throw Error
        res.send(newTask)
    })


});
module.exports = router;