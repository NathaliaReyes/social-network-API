const router = require('express').Router();
const {
    getAllUsers,
    // getUserById,
    // createUser,
    // updateUser,
    // deleteUser,
    // addFriend,
    // removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);


module.exports = router;
