import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserList.css";

type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="users-container">
      <h1>Users</h1>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <Link to={`/posts/${user.id}`}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.company.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;