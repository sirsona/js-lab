import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch users
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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  // abort controller
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        if (err.name == "AbortError") return;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading users.</p>;
  if (error) return <p>Error: {error}</p>;
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
