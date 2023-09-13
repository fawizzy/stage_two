const db = require("../prisma/db");
const personSchema = new db("person");


class personController{
    
    async  createPerson(req, res){
        const data = req.body? req.body : null;
        const requiredFields = ["name"]

        for (const field of requiredFields) {
            if (!data[field]) {
                res.status(400).json({ error: `Missing ${field.replace("_", " ")}` });
                return;
            }
        }

        if (typeof(data["name"])!=String){
            res.status(400).json("use only string type for name")
        }
        
        try{
            const createdPerson = await personSchema.create(data);

            res.status(201).json(`user ${data.name} created`)
        }catch(error){
            res.json(`error creating user`)
        }        
    }
    
    async  getAllPersons(req, res){
        const persons = await personSchema.getAll();
        res.status(200).json(persons)
    }

    async getPersonById(req, res){
        const id = parseInt(req.params["id"])
        
        if (id){
            try {
                const person = await personSchema.getById(id);
                res.status(200).json(person)
            } catch (error) {
                res.status(404).json("user not found")
            }
        }
    }
    
    async  deleteById(req, res){
        const id = parseInt(req.params["id"])

        if (id){
            try {
                const deletedPerson = await personSchema.delete(id);
                res.status(200).json(`person with id ${deletedPerson.id} successfully deleted`)
            } catch (error) {
                res.status(404).json("error deleting")
            }
        }
    }
    
    async  updatePerson(req, res){
        const id = parseInt(req.params["id"])
        const data = req.body? req.body : null;
        if (id && data){
            try {
                const updatedPerson = await personSchema.update(id, data);
                res.status(200).send(`person with ${updatedPerson.id} successfully updated`)
            } catch (error) {
                res.status(404).send("error updating")
            }
        }
    }
}

module.exports = personController;
