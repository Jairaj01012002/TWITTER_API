const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const top_users = require('./routes/top_n_users');
const profile = require('./routes/profile');
const tweets = require('./routes/tweets');
const liked_tweets = require('./routes/liked_tweets');
const tweet_details_by_id = require('./routes/tweet_details_by_id')
const client = require("./configs/database");

const app = express();

app.use(express.json());
app.use(cors());

client.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("connected to database");
})

app.get('/', (req, res) => {
    res.send("Now, Port:8000 is working!");
})

app.use("/user", authRoutes);
app.use("/user", top_users);
app.use("/user", profile);
app.use("/user", tweets)
app.use("/user", liked_tweets)
app.use("/user", tweet_details_by_id)

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});