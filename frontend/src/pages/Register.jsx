import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = async () => {

    try {

      const response = await API.post(
        "/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert(response.data.message);

    } catch {

      alert("Registration Failed");

    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow-xl w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <input
          placeholder="Name"
          className="w-full border p-3 rounded mb-4"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Register
        </button>

        <p className="mt-4 text-center">

          Already Registered?

          <Link
            to="/"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;