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

const getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const q = 'select * from users where Id = ?';
    await db.query(q, id, (err, data) => {
      if (err) {
        return res.status(400).json({ success: false, message: 'User id data not found' });
      } else {
        return res.status(200).json({ success: true, message: 'User id data found', data });
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const addUsers = async (req, res) => {
  try {
    const q = 'INSERT INTO users (`Name`,`Age`,`Village`,`Job`,`Salary`,`Office`) VALUES (?,?,?,?,?,?)';
    const { Name, Age, Village, Job, Salary, Office } = req.body;
    const values = [Name, Age, Village, Job, Salary, Office];
    await db.query(q, values, (err, data) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: 'Users added not successfully',
        });
      } else {
        res.status(200).json({ success: true, message: 'Users added successfully' });
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateUsers = async (req, res) => {
  try {
    const userId = req.params.id;
    const { Name, Age, Village, Job, Salary, Office } = req.body;
    const dUpdate = [Name, Age, Village, Job, Salary, Office, userId];
    const q = 'UPDATE users SET Name = ?, Age = ?,Village = ?,Job = ?,Salary = ?,Office = ? WHERE Id = ?';
    await db.query(q, dUpdate, (err, data) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: 'User updated not successfully',
        });
      } else {
        return res.status(200).json({
          success: true,
          message: 'user updated successfully',
          data,
        });
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const userId = req.params.id;
    const q = 'DELETE FROM users WHERE Id = ?';
    await db.query(q, userId, (err, data) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: 'User deleted not successfully',
        });
      } else {
        return res.status(200).json({
          success: true,
          message: 'User deleted successfully',
        });
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getUsers, getUsersById, addUsers, updateUsers, deleteUsers };
