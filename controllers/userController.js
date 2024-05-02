const { User, Thought } = require('../models');
const { Schema, Types, ObjectId } = require('mongoose');

module.exports = {
    //Get all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find().select('-__v')
            .populate('thoughts').populate('friends');
            
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

    // get one user by id
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id })
                .populate('thoughts');
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // Delete a single user:
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
            console.log(`Deleted: ${user}`);
        } catch (err) {
            console.log('Uh oh! Something went wrong!');
            res.status(500).json({ err: 'Something went wrong!' });
        }
    },

    // Update a user by id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                // the new option returns the updated document 
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // add a friend
    async addFriend(req, res) {
        try {
            const user = await
                User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $addToSet: { friends: req.params.friendId } },
                    { new: true }
                );
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        }catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // remove a friend
    async removeFriend(req, res) {
        try {
            const user = await
                User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $pull: { friends: req.params.friendId } },
                    { new: true }
                );
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

};