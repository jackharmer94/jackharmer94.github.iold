// Controller for user management
const usersController = {
  // Fetch users from the database
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Add a new user to the database
  addUser: async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
      const newUser = await User.create({ username, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Remove a user from the database
  removeUser: async (req, res) => {
    const userId = req.params.id;
    try {
      await User.findByIdAndRemove(userId);
      res.json({ message: 'User removed successfully' });
    } catch (error) {
      console.error('Error removing user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = usersController;
