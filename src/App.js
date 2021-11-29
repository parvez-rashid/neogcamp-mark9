import { useState } from "react";
import "./styles.css";

const foodList = {
  Indian: [
    { name: "Biryani", rating: "5/5" },
    { name: "Dosa", rating: "4/5" },
    { name: "Rajma Chawal", rating: "3/5" }
  ],

  Arab: [
    { name: "Mandi", rating: "5/5" },
    { name: "Shawarma", rating: "4/5" },
    { name: "Fahsa", rating: "3/5" }
  ],
  Chinese: [
    {
      name: "Anything with Schezwan chutney",
      rating: "5/5"
    },
    {
      name: "Momos",
      rating: "4/5"
    },
    {
      name: "Hakka noodles",
      rating: "3/5"
    }
  ]
};

export default function App() {
  var [selectedCuisine, setCuisine] = useState("Indian");
  function cuisineClickHandler(cuisine) {
    setCuisine(cuisine);
  }

  return (
    <div className="App">
      <h1>
        <span>🍲</span> Foodstack{" "}
      </h1>
      <h3>Check out my favourite food! Select a cuisine to get started 👇</h3>

      <div>
        {Object.keys(foodList).map((cuisine) => (
          <button
            onClick={() => cuisineClickHandler(cuisine)}
            style={{
              width: "100px",
              cursor: "pointer",
              padding: "0.5rem",
              margin: "1rem",
              borderRadius: "1rem"
            }}
          >
            {" "}
            {cuisine}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {foodList[selectedCuisine].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "60%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
