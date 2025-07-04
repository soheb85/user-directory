import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //UseEffect using with axios library to fetch the data from the api make easier.
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
        setError("Failed to fetch user data. Please try again later.");
        setLoading(false);
      });
  }, []);
  // filter user by name first we take user array then using filter method converting name in lower case and then using include method we checking for the character or string is present in any name
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-outfit">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="max-w-2xl mx-auto w-full">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-sm sm:text-base px-4 py-3 pl-10 rounded-lg border border-gray-300 
                         focus:outline-none focus:border-green-500 focus:ring-2 
                         focus:ring-green-500 transition-all duration-200
                         shadow-sm hover:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="border rounded-xl shadow-sm overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
            {loading && (
              <td colSpan="6" className="text-center md:text-xl text-lg text-green-500 py-4">
              Loading Users.....
            </td>
            )}

            {error && (
              <td colSpan="6" className="text-center text-red-500 py-4">
              {error}
            </td>
            )}
            <thead className="bg-gray-50 text-left text-gray-600 uppercase font-semibold">
              <tr>
                <th className="px-2 sm:px-4 py-2 sm:py-3">ID</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3">Name</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3">Email</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3">Phone</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3">Company</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3">Website</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="px-2 sm:px-4 py-2 sm:py-3">{user.id}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium">
                      {user.name}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-600">
                      {user.email}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3">{user.phone}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3">
                      {user.company.name}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-500 underline cursor-pointer">
                      {user.website}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  {error===null?(<td colSpan="6" className="text-center text-red-500 py-4">
                    No users found.
                  </td>):""}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
