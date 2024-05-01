const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    // updateUser,
    // deleteUser,
    // addFriend,
    // removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getSingleUser);


module.exports = router;
