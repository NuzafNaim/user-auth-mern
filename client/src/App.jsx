import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registraton from "./pages/Registraton";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export function App() {
  const isUserLoggedIn = !!localStorage.getItem("token");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registraton" element={<Registraton />} />
        {isUserLoggedIn && <Route path="/account" element={<Account />} />}
      </Routes>
      <Footer />
    </>
  );
}
export default App;
