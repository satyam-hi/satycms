// components/Sidebar.tsx
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col px-4 py-6 fixed">
      <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

      <nav className="flex-1 space-y-4">
    
        <Link href="/admin/pages/pageList" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
        Page List
        </Link> 
        <Link href="/admin/navlink/linkList" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
        Link List
        </Link> 
        <Link href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
          Settings
        </Link>
      </nav>
{/* 
      <div>
        <button className="w-full px-4 py-2 text-left rounded bg-red-600 hover:bg-red-500 transition">
          Logout
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;
