import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Define the links and their respective paths
  const links = [
    { path: "/dashboard", label: "My Courses" },
    { path: "/dashboard/analytics", label: "Analytics" },
    { path: "/page-not-found", label: "Account Settings" },
  ];

  return (
    <nav className="w-full md:w-64 h-auto md:h-screen bg-gray-800 p-4 text-white shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Hello, User</h3>
      <ul className="flex flex-col gap-2.5">
        {links.map(({ path, label }) => (
          <li key={path} className="mb-2">
            <Link
              to={path}
              className={`block p-2 rounded transition duration-200 ${
                location.pathname === path
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded transition duration-200"
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </nav>
  );
}

