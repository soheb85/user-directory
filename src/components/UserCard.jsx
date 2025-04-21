import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full sm:w-[48%] lg:w-[22%] bg-white shadow-md rounded-xl p-4 border border-gray-200 transition hover:shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{user.name}</h2>
      <p className="text-sm text-gray-500 mb-2">@{user.username}</p>
      <p className="text-sm text-gray-600"><strong>Email:</strong> {user.email}</p>
      <p className="text-sm text-gray-600"><strong>Phone:</strong> {user.phone}</p>
      <p className="text-sm text-gray-600"><strong>Website:</strong> <a href="#" target="_blank" className="text-blue-600 underline">{user.website}</a></p>

      <div className="mt-3 text-sm text-gray-600">
        <strong>Address:</strong>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city} - {user.address.zipcode}</p>
        <p>Geo: ({user.address.geo.lat}, {user.address.geo.lng})</p>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        <strong>Company:</strong>
        <p>{user.company.name}</p>
        <p className="italic text-gray-500">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;
