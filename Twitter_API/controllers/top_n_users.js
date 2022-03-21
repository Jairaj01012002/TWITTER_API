const client = require('../configs/database');

exports.top_users = (req, res) => {
    const { n } = req.body;

    client.query(`SELECT username, twitter_username,followers FROM users ORDER BY followers DESC LIMIT ${n}`).then((data) => {
        res.send(data.rows)
    }).catch((err) => {
        console.log(err);
    })
    // res.status(200).json({
    //     message: "Successfully product added",
    // })
}