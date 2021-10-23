const animalsControllers = require("../controllers/animals.controllers")



const resolvers = {
    Query: {
        whatsAnimal: () => animalsControllers.searchSort()
    }
}



module.exports = { resolvers }