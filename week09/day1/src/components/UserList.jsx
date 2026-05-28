import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [errors, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadUsers() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      setError(errors.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadUsers();
  }, []);
  if (loading) return <p>Loading users.</p>;
  if (errors) return <p>Error: {errors}</p>;
  if (users.length === 0) return <p>No users</p>;
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={loadUsers}>Refresh</button>
    </div>
  );
}

export default UserList;
