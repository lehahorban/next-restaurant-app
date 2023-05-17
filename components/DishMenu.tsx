import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const DishMenu: NextPage<Props> = () => {
  return (
    <section className="py-20 flex flex-col items-center">
      <h2 className="text-gray-200 text-4xl text-center">Dish Of The Day</h2>
      <ul className="m-auto p-5 flex flex-wrap justify-center gap-8 mt-10">
        <li className="max-w-sm flex flex-col justify-center items-center w-[350px]">
          <Image
            src="/images/placeholder1.jpg"
            alt="dish"
            width={350}
            height={260}
          />

          <div className="p-7 bg-[#252525] shadow-md">
            <h2 className="text-gray-100 text-3xl">Featured Meal</h2>
            <p className="text-gray-400 text-xs">
              Served with french fries + drink
            </p>
            <p className="text-gray-400 text-xs mt-5">
              Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add
              whopper patty, Add Tender crisp patty and more...
            </p>
          </div>
        </li>
        <li className="max-w-sm flex flex-col justify-center items-center w-[350px]">
          <div>
            <Image
              src="/images/placeholder2.jpg"
              alt="dish"
              width={350}
              height={260}
            />
          </div>
          <div className="p-7 bg-[#252525] shadow-md">
            <h2 className="text-gray-100 text-3xl">Featured Meal</h2>
            <p className="text-gray-400 text-xs">
              Served with french fries + drink
            </p>
            <p className="text-gray-400 text-xs mt-5">
              Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add
              whopper patty, Add Tender crisp patty and more...
            </p>
          </div>
        </li>
        <li className="max-w-sm flex flex-col justify-center items-center w-[350px]">
          <div>
            <Image
              src="/images/placeholder3.jpg"
              alt="dish"
              width={350}
              height={260}
            />
          </div>
          <div className="p-7 bg-[#252525] shadow-md">
            <h2 className="text-gray-100 text-3xl">Featured Meal</h2>
            <p className="text-gray-400 text-xs">
              Served with french fries + drink
            </p>
            <p className="text-gray-400 text-xs mt-5">
              Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add
              whopper patty, Add Tender crisp patty and more...
            </p>
          </div>
        </li>
        <li className="max-w-sm flex flex-col justify-center items-center w-[350px]">
          <div>
            <Image
              src="/images/placeholder4.jpg"
              alt="dish"
              width={350}
              height={260}
            />
          </div>
          <div className="p-7 bg-[#252525] shadow-md">
            <h2 className="text-gray-100 text-3xl">Featured Meal</h2>
            <p className="text-gray-400 text-xs">
              Served with french fries + drink
            </p>
            <p className="text-gray-400 text-xs mt-5">
              Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add
              whopper patty, Add Tender crisp patty and more...
            </p>
          </div>
        </li>
        <li className="max-w-sm flex flex-col justify-center items-center w-[350px]">
          <div>
            <Image
              src="/images/placeholder5.jpg"
              alt="dish"
              width={350}
              height={260}
            />
          </div>
          <div className="p-7 bg-[#252525] shadow-md">
            <h2 className="text-gray-100 text-3xl">Featured Meal</h2>
            <p className="text-gray-400 text-xs">
              Served with french fries + drink
            </p>
            <p className="text-gray-400 text-xs mt-5">
              Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add
              whopper patty, Add Tender crisp patty and more...
            </p>
          </div>
        </li>
        <li className="max-w-sm flex flex-col justify-center items-center w-[350px]">
          <div>
            <Image
              src="/images/placeholder6.jpg"
              alt="dish"
              width={350}
              height={260}
            />
          </div>
          <div className="p-7 bg-[#252525] shadow-md">
            <h2 className="text-gray-100 text-3xl">Featured Meal</h2>
            <p className="text-gray-400 text-xs">
              Served with french fries + drink
            </p>
            <p className="text-gray-400 text-xs mt-5">
              Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add
              whopper patty, Add Tender crisp patty and more...
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default DishMenu;
