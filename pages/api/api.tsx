// interface Dish {
//   id: number;
//   to: string;
//   dish: string;
// }

// const dishArr: Dish[] = [
//   { id: 1, to: "dish1", dish: "Grilled Salmon" },
//   { id: 2, to: "dish2", dish: "Vegetable Stir Fry" },
//   { id: 3, to: "dish3", dish: "Roast Chicken" },
//   { id: 4, to: "dish4", dish: "Steak" },
//   { id: 5, to: "dish5", dish: "Pork Chop" },
//   { id: 6, to: "dish6", dish: "Lamb Chops" },
//   { id: 7, to: "dish7", dish: "Beef Stew" },
//   { id: 8, to: "dish8", dish: "BBQ Ribs" },
//   { id: 9, to: "dish9", dish: "Mushroom Risotto" },
//   { id: 10, to: "dish10", dish: "Sausage and Peppers" },
//   { id: 11, to: "dish11", dish: "Meatloaf" },
//   { id: 12, to: "dish12", dish: "Pulled Pork" },
//   { id: 13, to: "dish13", dish: "Beef Stir Fry" },
//   { id: 14, to: "dish14", dish: "Grilled Shrimp" },
//   { id: 15, to: "dish15", dish: "Turkey Sandwich" },
//   { id: 16, to: "dish16", dish: "Beef Tacos" },
// ];

// export default dishArr;

interface Dish {
  id: number;
  to: string;
  dish: string;
  price?: string;
}

const dishArr: Dish[] = [
  { id: 1, to: "dish1", dish: "Grilled Salmon", price: "$10.99" },
  { id: 2, to: "dish2", dish: "Vegetable Stir Fry", price: "$12.99" },
  { id: 3, to: "dish3", dish: "Roast Chicken", price: "$11.99" },
  { id: 4, to: "dish4", dish: "Steak", price: "$13.99" },
  { id: 5, to: "dish5", dish: "Pork Chop", price: "$9.99" },
  { id: 6, to: "dish6", dish: "Lamb Chops", price: "$14.99" },
  { id: 7, to: "dish7", dish: "Beef Stew", price: "$11.49" },
  { id: 8, to: "dish8", dish: "BBQ Ribs", price: "$12.49" },
  { id: 9, to: "dish9", dish: "Mushroom Risotto", price: "$10.99" },
  { id: 10, to: "dish10", dish: "Sausage and Peppers", price: "$11.99" },
  { id: 11, to: "dish11", dish: "Meatloaf", price: "$9.99" },
  { id: 12, to: "dish12", dish: "Pulled Pork", price: "$13.49" },
  { id: 13, to: "dish13", dish: "Beef Stir Fry", price: "$11.99" },
  { id: 14, to: "dish14", dish: "Grilled Shrimp", price: "$12.99" },
  { id: 15, to: "dish15", dish: "Turkey Sandwich", price: "$9.99" },
  { id: 16, to: "dish16", dish: "Beef Tacos", price: "$10.99" },
];

export default dishArr;
