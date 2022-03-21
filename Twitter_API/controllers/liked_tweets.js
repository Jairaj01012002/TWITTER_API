const client = require('../configs/database');
const needle = require('needle');

exports.liked_tweets = (req, res) => {
    // const { n } = req.body;
    // console.log("profillele")
    const token = process.env.BEARER_TOKEN;
    const endpointURL = "https://api.twitter.com/2/users/1319170481958899713/liked_tweets";

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
        message: "Successfully Display Profile",
    })
}