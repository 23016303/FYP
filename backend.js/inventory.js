// backend/routes/inventory.js
const express = require('express');
const { verifyToken, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

// CRUD operations and viewing transactions will be added here (similar to auth.js)
router.get('/', verifyToken, (req, res) => {
  res.send('Inventory Access');
});

module.exports = router;