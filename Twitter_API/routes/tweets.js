const express = require('express')
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { tweets } = require('../controllers/tweets');

// console.log("routerrrr")
router.get("/tweets", verifyToken, tweets);

module.exports = router;