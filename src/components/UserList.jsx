import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Unable to load user cards. Try again.");
        setLoading(false);
      });
  }, []);

  //Same for card logic but use and taken all details like first
  //taking all user from api and filter and checkig search input box char or string in the name of all users then filter and return and we are
  // passing this filteruser to UserCard component as a props and then it displaying the user
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-outfit px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      <div className="max-w-lg mx-auto mb-6 relative">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="search"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-10 text-sm sm:text-base rounded-lg border border-gray-300 
                     focus:outline-none focus:border-blue-500 focus:ring-2 
                     focus:ring-blue-500 shadow-sm hover:shadow-md transition-all"
        />
      </div>
      {loading && (
        <div className="text-center text-green-600 py-4 font-medium">
          Loading cards...
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 py-4 font-medium">{error}</div>
      )}

      <div className="flex flex-wrap gap-4 justify-center">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <div>
            {error===null?(
                <p className="text-red-500">No matching users found.</p>
            ):("")}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
