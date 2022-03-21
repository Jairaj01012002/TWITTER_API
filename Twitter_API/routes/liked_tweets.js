const express = require('express')
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { liked_tweets } = require('../controllers/liked_tweets');

// console.log("routerrrr")
router.get("/liked_tweets", verifyToken, liked_tweets);

module.exports = router;