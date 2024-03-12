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

const addUsers = async (req, res) => {
  try {
    const q = 'INSERT INTO users (`Name`,`Age`,`Village`,`Job`,`Salary`,`Office)';
    const values = [
      'name from server',
      'age from server',
      'village from server',
      'job from server',
      'salary from server',
      'office from server',
    ];
    await db.query(q, [values], (err, data) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: 'Users added not successfully',
        });
      } else {
        res.status(200).json({ success: true, message: 'Users added successfully', data });
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getUsers, addUsers };
