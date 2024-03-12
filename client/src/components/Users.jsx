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

  return (
    <div className="relative overflow-x-auto">
      <table className="w-[70%] mx-auto text-sm text-left rtl:text-right text-white ">
        <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 shadow-md">
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
        <tbody className="text-xs uppercase bg-orange-700">
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
                      <Link>Edit</Link>
                    </button>
                    <button className="p-3 mx-2 bg-red-900">
                      <Link>Delete</Link>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
