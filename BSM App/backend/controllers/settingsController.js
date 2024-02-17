// Controller for settings management
const settingsController = {
  // Fetch settings from the database
  getSettings: async (req, res) => {
    try {
      const settings = await Settings.find();
      res.json(settings);
    } catch (error) {
      console.error('Error fetching settings:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Save settings to the database
  saveSettings: async (req, res) => {
    const { companyName, timezone, currency } = req.body;
    // Validate input data
    if (!companyName || !timezone || !currency) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
      // Save settings to the database
      await Settings.findOneAndUpdate({}, { companyName, timezone, currency }, { upsert: true });
      res.json({ message: 'Settings saved successfully' });
    } catch (error) {
      console.error('Error saving settings:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = settingsController;
