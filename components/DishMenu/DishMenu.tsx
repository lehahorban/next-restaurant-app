import { NextPage } from "next";
import { Element } from "react-scroll";

import DishList from "../DishList/DishList";

const DishMenu: NextPage = () => {
  return (
    <Element className="m-auto px-8" name="menu">
      <section className="py-20 flex flex-col justify-center items-center">
        <h2 className="text-gray-200 text-4xl text-center">Dish Of The Day</h2>
        <ul className="m-auto flex flex-wrap justify-center gap-8 mt-10">
          <DishList />
        </ul>
      </section>
    </Element>
  );
};

export default DishMenu;
