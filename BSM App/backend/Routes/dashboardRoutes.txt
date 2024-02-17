const express = require('express');
const router = express.Router();
const dashboardsController = require('../controllers/dashboardsController');

// Route to fetch admin dashboards
router.get('/admin-dashboards', dashboardsController.getAdminDashboards);

// Route to fetch client dashboards
router.get('/client-dashboards', dashboardsController.getClientDashboards);

module.exports = router;
