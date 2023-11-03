import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const BASE_URL = "https://outrageous-goat-sari.cyclic.app/api/";

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(BASE_URL + "users/login", {
        email,
        password,
      });
      const token = response.data.token;
      alert("You are Logged In");
      setEmail("");
      setPassword("");
      navigate("/account");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          onSubmit={handleLogIn}
          className="text-center border border-lg w-[600px] h-[400px] p-9"
        >
          <label htmlFor="">Email</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="">Passowrd</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button
            type="submit"
            className="w-[200px] h-[50px] border hover:bg-teal-900"
          >
            Log In
          </button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex items-center justify-center bg-teal-800">
        <h2 className="text-3xl text-white font-bold">Log In</h2>
      </div>
    </div>
  );
};

export default Login;
