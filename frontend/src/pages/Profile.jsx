import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Profile() {

  const navigate = useNavigate();

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

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Failed to save profile");

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow w-[500px]">

        <h1 className="text-3xl font-bold mb-6">
          Complete Profile
        </h1>

        <input
          type="number"
          placeholder="Age"
          className="w-full border p-3 mb-3 rounded"
          onChange={(e) =>
            setAge(e.target.value)
          }
        />

        <select
          className="w-full border p-3 mb-3 rounded"
          onChange={(e) =>
            setGender(e.target.value)
          }
        >
          <option value="">
            Select Gender
          </option>

          <option value="Male">
            Male
          </option>

          <option value="Female">
            Female
          </option>

          <option value="Other">
            Other
          </option>
        </select>

        <input
          type="number"
          placeholder="Height (cm)"
          className="w-full border p-3 mb-3 rounded"
          onChange={(e) =>
            setHeight(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full border p-3 mb-3 rounded"
          onChange={(e) =>
            setWeight(e.target.value)
          }
        />

        <select
          className="w-full border p-3 mb-3 rounded"
          onChange={(e) =>
            setGoal(e.target.value)
          }
        >
          <option value="">
            Select Goal
          </option>

          <option value="Weight Loss">
            Weight Loss
          </option>

          <option value="Weight Gain">
            Weight Gain
          </option>

          <option value="Muscle Building">
            Muscle Building
          </option>

          <option value="Fitness Maintenance">
            Fitness Maintenance
          </option>
        </select>

        <input
          type="text"
          placeholder="Food Preference (Veg / Non-Veg)"
          className="w-full border p-3 mb-3 rounded"
          onChange={(e) =>
            setFood(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Daily Food Budget"
          className="w-full border p-3 mb-4 rounded"
          onChange={(e) =>
            setBudget(e.target.value)
          }
        />

        <button
          onClick={saveProfile}
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          Save Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;