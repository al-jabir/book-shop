const db = require('../db/users');

const getUsers = async (req, res) => {
  try {
    const q = 'SELECT * FROM users';
    await db.query(q, (err, data) => {
      if (err) {
        return res.status(404).json({ success: false, message: 'users data not found' });
      } else {
        return res.status(200).json({
          success: true,
          message: 'users data all successfully',
          data,
        });
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = getUsers;
