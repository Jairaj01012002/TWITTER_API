const express = require('express')
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { tweet_details_by_id } = require('../controllers/tweet_details_by_id');

// console.log("routerrrr")
router.post("/tweet_details_by_id", tweet_details_by_id);

module.exports = router;