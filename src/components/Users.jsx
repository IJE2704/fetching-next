"use client";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="w-full mx-auto flex justify-center flex-col space-y-5">
      {users.map((user) => (
        <div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <h2 className="card-title">{user.username}</h2>
            <h2 className="card-title">{user.email}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
