const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('open', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).next();
    if(userCheck.length) {
        await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).next();
    if(thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }
});