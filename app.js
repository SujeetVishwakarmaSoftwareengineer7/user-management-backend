
const express = require("express");

const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/err.middleware");
const app = express();


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Default route
app.get("/", (req, res) => {
    res.send("User Management API is running");
});


// User routes
app.use("/", userRoutes);


// 404 route
app.use((req, res) => {
    res.status(404).json({
        msg: "Route not found"
    });
});


// Global error handler
app.use(errorHandler);

module.exports = app;
