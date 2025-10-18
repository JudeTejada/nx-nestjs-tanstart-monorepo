import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  email: string;
  name: string;
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch('/api/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function App() {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  console.log(users, 'users');

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users Dashboard</h2>

      {isLoading && <div>Loading users...</div>}

      {error && (
        <div className="text-red-500">Error loading users: {error.message}</div>
      )}

      {users && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">All Users</h3>
          {users.length === 0 ? (
            <p>No users found.</p>
          ) : (
            <div className="grid gap-4">
              {users.map((user) => (
                <div key={user.id} className="border p-4 rounded-lg">
                  <h4 className="font-semibold">{user.name}</h4>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
