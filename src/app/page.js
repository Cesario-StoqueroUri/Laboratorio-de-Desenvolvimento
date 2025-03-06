"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Erro ao buscar usuários", error));
  }, []);

  return (
    <div>
      <h1>Consumindo api:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
