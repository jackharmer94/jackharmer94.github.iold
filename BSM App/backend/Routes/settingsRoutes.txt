const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');

// Route to fetch settings
router.get('/settings', settingsController.getSettings);

// Route to save settings
router.post('/settings', settingsController.saveSettings);

module.exports = router;
