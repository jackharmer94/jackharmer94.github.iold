// Controller for dashboard management
const dashboardsController = {
  // Fetch admin dashboards from the database
  getAdminDashboards: async (req, res) => {
    try {
      const adminDashboards = await AdminDashboard.find();
      res.json(adminDashboards);
    } catch (error) {
      console.error('Error fetching admin dashboards:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Fetch client dashboards from the database
  getClientDashboards: async (req, res) => {
    try {
      const clientDashboards = await ClientDashboard.find();
      res.json(clientDashboards);
    } catch (error) {
      console.error('Error fetching client dashboards:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = dashboardsController;
