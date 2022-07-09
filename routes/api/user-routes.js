const router = require('express').Router();
const { getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// set up get all and post at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// set up get one, update, delete user at /api/users/:userId
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add and delete friends at /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;