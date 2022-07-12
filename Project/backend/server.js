const express = require("express")
//const notes = require("./data/notes")
const notes = require("./data/notes")

const app = express()
const dotenv = require('dotenv')

dotenv.config()



// get the data from backend to the front end and serve it
app.get('/',(req,res)=>{
    res.send("API is started")
})
app.get('/api/notes',(req,res)=>{
    //res.send(notes) same output
    res.json(notes)
})
app.get('/api/notes/:id',(req,res) =>{
    const note = notes.find((n)=> n._id===req.params.id)
    res.json(note)
    //console.log(req.params)
})


const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`server is running on PORT ${PORT}`))
//xnhgxd;