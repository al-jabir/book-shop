import axios from 'axios'; // Import Axios for making HTTP requests
import { useEffect, useState } from 'react'; // Import React hooks for managing state and side effects
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import React Router hooks for navigation and location

const Update = () => {
  const [users, setUsers] = useState({
    // State variable to store user data
    Name: '',
    Age: '',
    Village: '',
    Job: '',
    Salary: '',
    Office: '',
  });
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // Hook to access the current location
  const userId = location.pathname.split('/')[2]; // Extracting userId from the URL path

  useEffect(() => {
    console.log(users); // Log the user state whenever it changes
  }, [users]);

  const handleChange = (e) => {
    // Function to handle changes in input fields
    const { name, value } = e.target;
    setUsers((prevState) => ({
      // Update the user state based on previous state
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    // Function to handle form submission
    try {
      await axios.put(`http://localhost:4000/users/${userId}`, users); // Send PUT request to update user data
      navigate('/'); // Navigate back to the home page after successful update
    } catch (error) {
      console.log(error.message); // Log any errors that occur during the update process
      // Add error handling or feedback to the user if needed
    }
  };

  return (
    <div className="h-[100vh] p-6 flex flex-col justify-center items-center w-full">
      <h1 className="text-center py-5 uppercase font-bold">Edit user data</h1>
      <form className="w-full max-w-sm">
        {/* Input fields for user data */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Name</label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-name"
              type="text"
              name="Name"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Repeat similar structure for other input fields */}
        {/* Save button */}
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Save
        </button>
        {/* Back button */}
        <Link to="/" className="ml-2">
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Back User
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
