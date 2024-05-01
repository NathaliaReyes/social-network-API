const router = require('express').Router();
const {
    getAllThoughts,
    // getSingleThought,
    createThought,
    // updateThought,
    // deleteThought,
    // addReaction,
    // deleteReaction
} = require('../../controllers/thoughtController');


// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

module.exports = router;