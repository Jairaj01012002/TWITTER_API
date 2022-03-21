const express = require('express')
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { top_users } = require('../controllers/top_n_users');
router.post("/top_users", verifyToken, top_users);

module.exports = router;