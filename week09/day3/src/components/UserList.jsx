import { useFetch } from "../hooks/useFetch";

function UserList() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, loading, error, refetch } = useFetch(url);

  if (loading) return <p>Loading users.</p>;
  if (error) return <p>Error: {error}</p>;
  if (data.length === 0) return <p>No users</p>;

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}

export default UserList;
