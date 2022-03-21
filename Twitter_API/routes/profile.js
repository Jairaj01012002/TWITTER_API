const express = require('express')
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { profile } = require('../controllers/profile');

// console.log("routerrrr")
router.get("/profile", profile);

module.exports = router;