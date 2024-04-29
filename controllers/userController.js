const { User, Thought } = require('../models');


module.exports = {
    //Get all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find({}).populate('thoughts');
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};