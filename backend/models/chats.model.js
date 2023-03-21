const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatsSchema = new Schema ({
    katty: { type: String, required: true},
    pic: { type: String, default: 'public/Assests/ChattyKat.png' }
}, 
    {
    timestamps: true,
});

const Chats = mongoose.model('Chat', chatsSchema);

module.exports = Chats;