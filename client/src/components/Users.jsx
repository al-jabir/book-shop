import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:4000/users');
        if (res.data.success) {
          console.log(res.data.data);
          setUsers(res.data.data); // Assuming data is an array of users
        } else {
          console.error('Error fetching users:', res.data.message);
        }
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (Id) => {
    try {
      await axios.delete('http://localhost:4000/users/' + Id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="relative overflow-x-auto">
      <h1 className="text-center py-5 uppercase font-bold">User all data</h1>
      <table className="w-[70%] mx-auto  ">
        <thead className="text-xs uppercase bg-gray-300  shadow-md">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Village
            </th>
            <th scope="col" className="px-6 py-3">
              Job
            </th>
            <th scope="col" className="px-6 py-3">
              Office
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-xs uppercase">
          {users.map(({ Id, Name, Age, Village, Job, Office }) => {
            return (
              <tr key={Id}>
                <td className="px-6 py-3">{Id}</td>
                <td className="px-6 py-3">{Name}</td>
                <td className="px-6 py-3">{Age}</td>
                <td className="px-6 py-3">{Village}</td>
                <td className="px-6 py-3">{Job}</td>
                <td className="px-6 py-3">{Office}</td>
                <td className="px-6 py-3">
                  <div>
                    <button className="p-3 mx-2 bg-green-600">
                      <Link to={`/update/${Id}`}>Edit</Link>
                    </button>
                    <button onClick={() => handleDelete(Id)} className="p-3 mx-2 bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <button className=" bg-blue-600 px-6 py-3 capitalize">
          <Link to={'/add'}>Add new user</Link>
        </button>
      </table>
    </div>
  );
};

export default Users;
