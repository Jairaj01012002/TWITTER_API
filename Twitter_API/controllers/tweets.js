const client = require('../configs/database');
const needle = require('needle');
const jwt = require('jsonwebtoken');

exports.tweets = (req, res) => {

    var id = 0;
    // const { n } = req.body;
    const token_auth = req.headers.authorization;

    jwt.verify(token_auth, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(500).json({
                error: "Server Error Found",
            })
        }
        // console.log(decoded)
        const user = decoded.username;
        console.log("AUTH_USER", user);

        client.query(`SELECT * FROM users WHERE username = '${user}'`)
            .then((data) => {
                // console.log(data);
                if (data.rows.length == 0) {
                    res.status(404).send("Token Not verified");
                }
                else {
                    // next();
                    const token = process.env.BEARER_TOKEN;
                    console.log("Inside 1st");
                    const endpointURL = "https://api.twitter.com/2/users/by/username/iampkumar02";

                    async function getRequest() {
                        // this is the HTTP header that adds bearer token authentication
                        const res = await needle('get', endpointURL, {
                            headers: {
                                "authorization": `Bearer ${token}`
                            }
                        })
                        if (res.body) {
                            return res.body;
                        } else {
                            throw new Error('Unsuccessful request');
                        }
                    }

                    (async () => {

                        try {
                            // Make request
                            const response = await getRequest();
                            id = response["data"]["id"];
                            console.log(id);

                            console.dir(response, {
                                depth: null
                            });

                        } catch (e) {
                            console.log(e);
                            process.exit(-1);
                        }
                        // process.exit();
                    })();

                    const endpointURL_tweets = `https://api.twitter.com/2/users/${id}/tweets`;

                    async function getRequest_tweets() {
                        // this is the HTTP header that adds bearer token authentication
                        const res = await needle('get', endpointURL_tweets, {
                            headers: {
                                "authorization": `Bearer ${token}`
                            }
                        })
                        if (res.body) {
                            return res.body;
                        } else {
                            throw new Error('Unsuccessful request');
                        }
                    }

                    (async () => {

                        try {
                            // Make request
                            const response = await getRequest_tweets();
                            console.dir(response, {
                                depth: null
                            });

                        } catch (e) {
                            console.log(e);
                            process.exit(-1);
                        }
                        process.exit();
                    })();

                    res.status(200).json({
                        message: "Successfully Display Tweets",
                    })
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