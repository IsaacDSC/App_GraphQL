const typeDefs = `
      type Animal {
        animal: String
        emoji: String
      }
      type Query {
        whatsAnimal: Animal
      }
    `


/* const resolvers = {
    Query: {
        whatsAnimal: () => {
            const idx = Math.floor(Math.random() * animals.length);
            return animals[idx];
        }
    }
} */


module.exports = {
    typeDefs
}