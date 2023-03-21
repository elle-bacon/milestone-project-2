//require express and the model/schema
const router = require('express').Router();
let Chats = require('../models/chats.model');

//GET route
router.route('/').get((req, res) => {
    Chats.find()
        .then(chats => res.json(chats))
        .catch(err => res.status(400).json('Error: ' + err));
});

//GET by ID
router.route('/:id').get((req, res) => {
    Chats.findById(req.params.id)
        .then(chats => res.json(chats))
        .catch(err => res.status(400).json('Error: ' + err));
})

//POST route
router.route('/add').post((req, res) => {
    const katty = req.body.katty;
    const pic = req.body.pic;

    const newChats = new Chats({ katty, pic });

    newChats.save()
        .then(() => res.json('Chat added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;