const mongoose = require("mongoose")

const Schema = mongoose.Schema;

//Create Schema 
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    lEvel: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tasks: [{

        content: {
            type: String,
            required: true
        },
        comment: {
            type: [String]
        }

    }],

    date: {
        type: Date,
        default: Date.now
    }
})
const Post = mongoose.model("posts", PostSchema)
module.exports = Post