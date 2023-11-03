import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registraton = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleReg = (e) => {
    e.preventDefault();
    axios
      .post("https://outrageous-goat-sari.cyclic.app/api/users/register", {
        name,
        email,
        password,
      })
      .then(() => {
        alert("Reg Success");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          onSubmit={handleReg}
          className="text-center border border-lg w-[600px] h-[400px] p-9"
        >
          <label htmlFor="">Name</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
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
            Registraton
          </button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex items-center justify-center bg-teal-800">
        <h2 className="text-3xl text-white font-bold">Registraton</h2>
      </div>
    </div>
  );
};

export default Registraton;
