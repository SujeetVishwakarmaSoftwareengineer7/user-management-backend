
const express = require("express");

const router = express.Router();

const {
    getUsersHTML,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser
} = require("../controllers/user.controller");


// GET: HTML users
router.get("/users", getUsersHTML);


// GET: All users JSON
router.get("/api/users", getAllUsers);


// POST: Create new user
router.post("/api/users", createUser);


// GET, PATCH, DELETE: Particular user
router.route("/api/users/:id")
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);


module.exports = router;
