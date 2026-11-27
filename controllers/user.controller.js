
const User = require("../models/user.model");

// GET: Users ko HTML format mein show karna
async function getUsersHTML(req, res, next) {
    try {
        const alldbusers = await User.find({});

        const escapeHTML = (value) =>
            String(value ?? "").replace(/[&<>"']/g, (char) => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            })[char]);

        const html = `
            <html>
                <head>
                    <title>All Users</title>
                </head>
                <body>
                    <h1>All Users</h1>
                    <ul>
                        ${alldbusers.map((user) => `
                            <li>
                                ${escapeHTML(user.firstname)} -
                                ${escapeHTML(user.email)}
                            </li>
                        `).join("")}
                    </ul>
                </body>
            </html>
        `;

        return res.send(html);

    } catch (error) {
        next(error);
    }
}


// GET: All users JSON format mein
async function getAllUsers(req, res, next) {
    try {
        const alldbusers = await User.find({});

        return res.status(200).json(alldbusers);

    } catch (error) {
        next(error);
    }
}


// GET: ID ke through particular user find karna
async function getUserById(req, res, next) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        return res.status(200).json(user);

    } catch (error) {
        next(error);
    }
}


// PATCH: Existing user update karna
async function updateUser(req, res, next) {
    try {
        const body = req.body;

        const allowedFields = {
            first_name: "firstname",
            last_name: "lastname",
            email: "email",
            gender: "gender",
            job_title: "jobtitle"
        };

        const updateData = {};

        for (const key in allowedFields) {
            if (body[key] !== undefined) {
                updateData[allowedFields[key]] = body[key];
            }
        }

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                msg: "At least one valid field is required"
            });
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: updateData },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        return res.status(200).json({
            status: "success",
            user: updatedUser
        });

    } catch (error) {
        next(error);
    }
}


// DELETE: User delete karna
async function deleteUser(req, res, next) {
    try {
        const deletedUser = await User.findByIdAndDelete(
            req.params.id
        );

        if (!deletedUser) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        return res.status(200).json({
            status: "success",
            msg: "User deleted successfully"
        });

    } catch (error) {
        next(error);
    }
}


// POST: New user create karna
async function createUser(req, res, next) {
    try {
        const body = req.body;

        console.log("BODY:", body);

        if (
            !body ||
            !body.first_name ||
            !body.last_name ||
            !body.email ||
            !body.gender ||
            !body.job_title
        ) {
            return res.status(400).json({
                msg: "All fields are required"
            });
        }

        const result = await User.create({
            firstname: body.first_name,
            lastname: body.last_name,
            email: body.email,
            gender: body.gender,
            jobtitle: body.job_title
        });

        return res.status(201).json({
            msg: "User created successfully",
            user: result
        });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                msg: "Email already exists"
            });
        }

        next(error);
    }
}


module.exports = {
    getUsersHTML,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser
};
