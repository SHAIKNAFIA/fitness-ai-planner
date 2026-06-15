import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async () => {

  try {

    const response = await API.post(
      "/auth/login",
      {
        email,
        password
      }
    );

    const userId = response.data.user_id;

    localStorage.setItem(
      "userId",
      userId
    );

    try {

      const profileResponse =
        await API.get(
          `/user/profile/${userId}`
        );

      const profile =
        profileResponse.data;

      if (
        !profile.age ||
        !profile.height ||
        !profile.weight ||
        !profile.goal
      ) {

        navigate("/profile");

      } else {

        navigate("/dashboard");

      }

    } catch {

      navigate("/profile");

    }

  } catch (error) {

    alert("Invalid Credentials");

  }

};

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow-xl w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Fitness AI Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-center">

          New User?

          <Link
            to="/register"
            className="text-blue-600 ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;