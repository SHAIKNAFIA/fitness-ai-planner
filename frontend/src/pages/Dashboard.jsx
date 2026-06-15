import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {

const navigate = useNavigate();

const [profile, setProfile] = useState(null);
const [workout, setWorkout] = useState("");
const [diet, setDiet] = useState("");

useEffect(() => {


const userId = localStorage.getItem("userId");

if (userId) {
  fetchProfile(userId);
}


}, []);

const fetchProfile = async (userId) => {


try {

  const response = await API.get(
    `/user/profile/${userId}`
  );

  setProfile(response.data);

} catch (error) {

  console.log(error);
  alert("Failed to load profile");

}

};

const generateWorkout = async () => {


const userId = localStorage.getItem("userId");

try {

  const response = await API.get(
    `/workout/generate/${userId}`
  );

  setWorkout(response.data.plan);

} catch (error) {

  console.log(error);
  alert("Workout generation failed");

}


};

const generateDiet = async () => {


const userId = localStorage.getItem("userId");

try {

  const response = await API.get(
    `/diet/generate/${userId}`
  );

  setDiet(response.data.plan);

} catch (error) {

  console.log(error);
  alert("Diet generation failed");

}

};

const handleLogout = () => {


localStorage.removeItem("userId");

navigate("/");

};

return ( <div className="min-h-screen bg-gray-100 p-8">


  <div className="flex justify-between items-center mb-8">

    <h1 className="text-4xl font-bold">
      Fitness AI Dashboard
    </h1>

    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Logout
    </button>

  </div>

  {profile && (

    <>
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            User Profile
          </h2>

          <p>
            <strong>Name:</strong> {profile.name}
          </p>

          <p>
            <strong>Age:</strong> {profile.age}
          </p>

          <p>
            <strong>Goal:</strong> {profile.goal}
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Health Metrics
          </h2>

          <p>
            <strong>Height:</strong> {profile.height} cm
          </p>

          <p>
            <strong>Weight:</strong> {profile.weight} kg
          </p>

          <p>
            <strong>BMI:</strong> {profile.bmi}
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Diet Preference
          </h2>

          <p>{profile.food_preference}</p>

          <p className="mt-2">
            <strong>Budget:</strong> {profile.budget}
          </p>

        </div>

      </div>

      <div className="bg-white p-6 rounded-xl shadow mt-8">

        <h2 className="text-2xl font-bold mb-4">
          AI Workout Generator
        </h2>

        <button
          onClick={generateWorkout}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Generate Workout Plan
        </button>

        {workout && (

          <div className="mt-6 p-4 bg-gray-100 rounded">

            <pre className="whitespace-pre-wrap">
              {workout}
            </pre>

          </div>

        )}

      </div>

      <div className="bg-white p-6 rounded-xl shadow mt-8">

        <h2 className="text-2xl font-bold mb-4">
          AI Diet Generator
        </h2>

        <button
          onClick={generateDiet}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Generate Diet Plan
        </button>

        {diet && (

          <div className="mt-6 p-4 bg-gray-100 rounded">

            <pre className="whitespace-pre-wrap">
              {diet}
            </pre>

          </div>

        )}

      </div>

    </>

  )}

</div>


);
}

export default Dashboard;
