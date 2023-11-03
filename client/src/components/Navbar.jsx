import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isUserLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-around p-3 border-b border-zink-800 items-center bg-[#1a1a1a]/90 text-zinc-300">
      <Link to="/">
        <h1 className="text-3xl">Auth MERN</h1>
      </Link>
      <ul className="flex gap-6">
        {isUserLoggedIn ? (
          <>
            <Link to="/account">
              <li>Account</li>
            </Link>
            <button onClick={handleLogOut}>Log Out</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/registraton">
              <li>Registraton</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
