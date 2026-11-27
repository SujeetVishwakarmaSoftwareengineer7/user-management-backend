
function errorHandler(err, req, res, next) {
    console.error(err);

    if (err.name === "CastError") {
        return res.status(400).json({
            msg: "Invalid user ID"
        });
    }

    if (err.code === 11000) {
        return res.status(409).json({
            msg: "Duplicate value already exists"
        });
    }

    if (err.name === "ValidationError") {
        return res.status(400).json({
            msg: err.message
        });
    }

    return res.status(500).json({
        msg: "Internal Server Error"
    });
}

module.exports = errorHandler;
