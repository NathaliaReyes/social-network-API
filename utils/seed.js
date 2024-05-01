const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userData, thoughtsData } = require('./data');

connection.on('open', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if(userCheck.length) {
        await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if(thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    let users = [];
    let thoughts = [];

    users = await User.collection.insertMany(userData);

    thoughts = await Thought.collection.insertMany(thoughtsData);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});