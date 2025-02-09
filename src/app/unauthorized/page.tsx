import Link from "next/link";

export default function Unauthorized() {
    return (
      <div className="flex flex-col items-center h-screen space-y-4 mt-10">
        <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
        <p>You do not have permission to view this page.</p>
        <p>Only an admin can Access the Dashboard</p>
        <Link 
        href={"/"}
        className="text-white bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded"
        >Go Back to Home</Link>
      </div>
    );
  }
  