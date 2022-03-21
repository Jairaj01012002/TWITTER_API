const jwt = require('jsonwebtoken');
const client = require('../configs/database');

exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    // console.log("Token1")
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(500).json({
                error: "Server Error Found",
            })
        }
        // console.log(decoded)
        const user = decoded.username;
        // console.log("AUTH_USER", user);

        client.query(`SELECT * FROM users WHERE username = '${user}'`)
            .then((data) => {
                // console.log(data);
                if (data.rows.length == 0) {
                    res.status(404).send("Token Not verified");
                }
                else {
                    next();
                }
            })
            .catch((err) => {
                if (err) {
                    res.status(500).json({
                        message: "Database error occurred",
                        error: err,
                    })
                }

            })
    })
}