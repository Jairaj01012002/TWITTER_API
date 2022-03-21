const client = require('../configs/database');
const needle = require('needle');

exports.tweet_details_by_id = (req, res) => {
    const id = req.body;
    const tweet_id = id.tweet_id;
    // const tweet_id = "1382769445353836545";
    const token = process.env.BEARER_TOKEN;
    const endpointURL = `https://api.twitter.com/2/tweets/${tweet_id}`;
    console.log(endpointURL);

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