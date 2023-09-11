const express = require("express");
const personController = require("./controller/personController")

const app =express()
const port = 5000;

const PersonController = new personController()

app.use(express.json())
app.get("/api", PersonController.getAllPersons)
app.get("/api/:id", PersonController.getPersonById)
app.delete("/api/:id", PersonController.deleteById)
app.post("/api", PersonController.createPerson)
app.put("/api/:id", PersonController.updatePerson)





app.listen(port,()=>{
    console.log("listening at port ", port)
})