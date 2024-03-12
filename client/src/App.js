import React, { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Village</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Office</th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default App;
