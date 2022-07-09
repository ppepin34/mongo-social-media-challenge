const router = require('express').Router();
const { getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// get all and post at /api/thoughts/

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// get one, put, delete by id at /api/thoughts/:thoughtId
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// add reaction at /api/thoughts/:thoughtId/reactions
router.route('/:id/reactions').post(addReaction);

// delete reaction at /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;