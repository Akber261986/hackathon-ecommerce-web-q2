

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
}

interface User {
  name: string;
  email: string;
  savedAddresses: string[];
  orderHistory: Order[];
}

const UserProfilePage = async () => {
  // Fetch user data from the API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
    cache: "no-store", // Disable caching for dynamic data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  const user: User = await res.json();

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      {/* User Info */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Personal Details</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>

      {/* Saved Addresses */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Saved Addresses</h2>
        {user.savedAddresses.length > 0 ? (
          <ul className="list-disc ml-6">
            {user.savedAddresses.map((address, index) => (
              <li key={index}>{address}</li>
            ))}
          </ul>
        ) : (
          <p>No saved addresses found.</p>
        )}
      </div>

      {/* Order History */}
      <div>
        <h2 className="text-lg font-semibold">Order History</h2>
        {user.orderHistory.length > 0 ? (
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr className="border-b">
                <th className="p-2">Order ID</th>
                <th className="p-2">Date</th>
                <th className="p-2">Total</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {user.orderHistory.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.date}</td>
                  <td className="p-2">${order.total}</td>
                  <td className="p-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
