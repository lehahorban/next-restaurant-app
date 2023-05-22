export interface MenuItem {
  id: number;
  to: string;
  title: string;
  description: string;
  more: string;
  dish: string;
  price: string;
}

const menuArr: MenuItem[] = [
  {
    id: 1,
    to: "placeholder1",
    title: "Featured Meal",
    description: "Served with french fries + drink",
    more: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    dish: "Cream Soup",
    price: "$9.99",
  },
  {
    id: 2,
    to: "placeholder2",
    title: "Featured Meal",
    description: "Served with french fries + drink",
    more: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    dish: "Olive Salad",
    price: "$12.99",
  },
  {
    id: 3,
    to: "placeholder3",
    title: "Featured Meal",
    description: "Served with french fries + drink",
    more: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    dish: "Egg Salad",
    price: "$10.99",
  },
  {
    id: 4,
    to: "placeholder4",
    title: "Featured Meal",
    description: "Served with french fries + drink",
    more: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    dish: "Tuna Salad",
    price: "$7.99",
  },
  {
    id: 5,
    to: "placeholder5",
    title: "Featured Meal",
    description: "Served with french fries + drink",
    more: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    dish: "Caprese Salad",
    price: "$6.99",
  },
  {
    id: 6,
    to: "placeholder6",
    title: "Featured Meal",
    description: "Served with french fries + drink",
    more: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    dish: "Vegetable Salad",
    price: "$11.99",
  },
];

export default menuArr;
