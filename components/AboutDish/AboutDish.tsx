import { NextPage } from "next";
import { Element } from "react-scroll";

import Slider from "../Slider/Slider";

const AboutDish: NextPage = () => {
  return (
    <>
      <Element className="m-auto px-8" name="about">
        <section className="pt-20 flex flex-col justify-center items-center">
          <h2 className="text-gray-200 text-4xl text-center">
            The Basics Of Healthy Food
          </h2>
          <Slider />
        </section>
      </Element>
    </>
  );
};

export default AboutDish;
