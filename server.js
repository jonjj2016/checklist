const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const db = require('./config/keys').mongoURI
const users = require('./routs/api/users')
const tasks = require('./routs/api/tsks')
// Connecting mongoose
mongoose.connect(db, {
    useNewUrlParser: true
}, () => console.log("mongo db connected"))
//routs
//MIdlewares
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api/users', users)
app.use('/api/posts', tasks)
//listening to the server

const PORT = process.env.PORT || 6000
app.listen(PORT, () => console.log(`app is running on port ${PORT}`))