export default function Plant({ plant, addToCart }) {
  return (
    <li>
      <figure> {plant.image} </figure>
      <h2> {plant.name} </h2>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </li>
  );
}
