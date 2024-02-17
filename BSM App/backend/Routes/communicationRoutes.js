const express = require('express');
const router = express.Router();
const communicationController = require('../controllers/communicationController');

// Route to send notifications
router.post('/send-notification', communicationController.sendNotification);

// Route to save automated notifications
router.post('/save-automated-notification', communicationController.saveAutomatedNotification);

// Route to fetch notification calendar data
router.get('/notification-calendar', communicationController.getNotificationCalendar);

module.exports = router;
