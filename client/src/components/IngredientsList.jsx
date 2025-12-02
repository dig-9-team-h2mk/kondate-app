function IngredientsList({ items }) {
  return (
    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
      {items.map((item, index) => (
        <li key={index}>
          {item.ingredient}
          {item.quantity}g
        </li>
      ))}
    </ul>
  );
}

export default IngredientsList;
