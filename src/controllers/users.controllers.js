const users = [
    { id: 1, name: 'Isaac', username: 'IsaacDSC', email: 'isaac@gmail.com', password: 'ash@#12dass122#' },
    { id: 2, name: 'Raissa', username: 'Raissa', email: 'raissa@gmail.com', password: 'ash@#12dass122#' },
]
class UsersControllers {
    async serchAll() {
        const result = users
        return result
    }
}


module.exports = new UsersControllers