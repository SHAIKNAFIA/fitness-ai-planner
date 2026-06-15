import { useState } from "react";
import API from "../services/api";

function Profile() {

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [food, setFood] = useState("");
  const [budget, setBudget] = useState("");

  const saveProfile = async () => {

    const userId =
      localStorage.getItem("userId");

    try {

      const response = await API.put(
        `/user/profile/${userId}`,
        {
          age,
          gender,
          height,
          weight,
          goal,
          food_preference: food,
          budget
        }
      );

      alert(response.data.message);

    } catch {

      alert("Failed");

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow w-[500px]">

        <h1 className="text-3xl font-bold mb-6">
          Complete Profile
        </h1>

        <input
          placeholder="Age"
          className="w-full border p-3 mb-3"
          onChange={(e)=>setAge(e.target.value)}
        />

        <input
          placeholder="Gender"
          className="w-full border p-3 mb-3"
          onChange={(e)=>setGender(e.target.value)}
        />

        <input
          placeholder="Height (cm)"
          className="w-full border p-3 mb-3"
          onChange={(e)=>setHeight(e.target.value)}
        />

        <input
          placeholder="Weight (kg)"
          className="w-full border p-3 mb-3"
          onChange={(e)=>setWeight(e.target.value)}
        />

        <input
          placeholder="Goal"
          className="w-full border p-3 mb-3"
          onChange={(e)=>setGoal(e.target.value)}
        />

        <input
          placeholder="Food Preference"
          className="w-full border p-3 mb-3"
          onChange={(e)=>setFood(e.target.value)}
        />

        <input
          placeholder="Budget"
          className="w-full border p-3 mb-3"
          onChange={(e)=>setBudget(e.target.value)}
        />

        <button
          onClick={saveProfile}
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Save Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;