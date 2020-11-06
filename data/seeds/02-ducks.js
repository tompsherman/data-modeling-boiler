
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('ducks').insert([
        {id: 1, duck_names: 'mallard fillmore'},
        {id: 2, duck_names: 'daffy'},
        {id: 3, duck_names: 'donald'}
      ]);
};
