import { useState } from "react";
import PLANTS from "./data.js";
import Plant from "./Plant";

export default function Plants({ addToCart }) {
  const [plants] = useState(PLANTS);
  return (
    <>
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </>
  );
}
