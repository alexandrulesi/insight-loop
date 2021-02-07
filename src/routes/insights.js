const express = require('express');
const router = express.Router();

// Import Controller
const insightsController = require('../controllers/insights');

// First Route
router.get('/insights', insightsController.getInsight);

module.exports = router; // Export all routes for use in the server.js
