import { NextPage } from "next";
import Image from "next/image";
import menuArr, { MenuItem } from "@/pages/api/menu";

const DishList: NextPage = () => {
  return (
    <>
      {menuArr.map(
        ({ id, to, title, description, more, dish, price }: MenuItem) => (
          <li
            key={id}
            className="max-w-[350px] flex flex-col justify-center items-center overflow-hidden relative group"
          >
            <Image
              className="rounded-t-md"
              src={`/images/${to}.jpg`}
              alt={dish}
              width={350}
              height={260}
            />

            <div className="p-7 bg-[#252525] shadow-md rounded-b-md">
              <h2 className="text-gray-100 text-3xl">{title}</h2>
              <p className="text-gray-400 text-xs">{description}</p>
              <p className="text-gray-400 text-xs mt-5">{more}</p>

              <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white p-2 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xl">{dish}</p>
                <p className="mt-3 text-gray-400">{price}</p>
              </div>
            </div>
          </li>
        )
      )}
    </>
  );
};

export default DishList;
