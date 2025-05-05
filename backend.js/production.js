// backend/routes/production.js
const express = require('express');
const { verifyToken, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.get('/', verifyToken, authorizeRoles('supervisor'), (req, res) => {
  res.send('Production Report for Supervisors');
});

module.exports = router;