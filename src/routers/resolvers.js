const animalsControllers = require("../controllers/animals.controllers")
const usersControllers = require("../controllers/users.controllers")



const resolvers = {
    Query: {
        whatsAnimal: () => animalsControllers.searchSort(),
        getUsers: () => usersControllers.serchAll(),
    }
}



module.exports = { resolvers }