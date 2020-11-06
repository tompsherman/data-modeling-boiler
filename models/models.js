const db = require('../data/db-config')

module.exports = {
    // function names
    find, // GET / all ducks
    findById, // GET / specific duck
    findSteps, //  GET / .join tables together **BAD NAME -- CHANGE **
    create, // POST / add new duck
    createStep, // POST / insert new step **BAD NAME -- CHANGE **
    update, // PUT / edit duck
    remove // DELETE / remove duck

}
    // functions
    function find(){
        return db('ducks')
    }
    function findById(id){
        return db('ducks')
        .where({id})
        .first()
    }
    function findSteps(id){
        return db('ducks')
    }
    async function create(duck){
        const [id] = await
        db('ducks').insert(duck)
            return db('ducks')
            .where({id})
            .first()
    }
    function createStep(id){
        return db('ducks')
    }
    async function update(id, changes){
        const count = await db('ducks').where({id}).update(changes)
        if (count){
            return db('ducks').where({id}).first()
        } else {
            return Promise.resolve(null)
        }
    }
    function remove(id){
        return db('ducks')
    }