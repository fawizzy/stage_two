const db = require("../prisma/db");
const personSchema = new db("person");


class personController{
    
    async  createPerson(req, res){
        const data = req.body? req.body : null;
        const requiredFields = ["email","firstName", "lastName"]

        for (const field of requiredFields) {
            if (!data[field]) {
                res.status(400).json({ error: `Missing ${field.replace("_", " ")}` });
                return;
            }
        }

        
        try{
            const createdPerson = await personSchema.create(data);
            res.json(`user ${data.firstName} successfully created`)
        }catch(error){
            res.json(`error creating user`)
        }        
    }
    
    async  getAllPersons(req, res){
        const persons = await personSchema.getAll();
        res.json(persons)
    }

    async getPersonById(req, res){
        const id = parseInt(req.params["id"])
        
        if (id){
            try {
                const person = await personSchema.getById(id);
                res.json(person)
            } catch (error) {
                res.json("error getting user")
            }
        }
    }
    
    async  deleteById(req, res){
        const id = parseInt(req.params["id"])

        if (id){
            try {
                const deletedPerson = await personSchema.delete(id);
                res.json(deletedPerson)
            } catch (error) {
                res.json("error deleting")
            }
        }
        
    }
    
    async  updatePerson(req, res){
        const id = parseInt(req.params["id"])
        const data = req.body? req.body : null;
        if (id && data){
            try {
                const updatedPerson = await personSchema.update(id, data);
                res.send("successfully updated")
            } catch (error) {
                res.send("error updating")
            }
        }
    }
}

module.exports = personController;
