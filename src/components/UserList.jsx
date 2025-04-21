import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Failed to fetch users", err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
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

      <div className="flex flex-wrap gap-4 justify-center">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p className="text-red-500">No matching users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
