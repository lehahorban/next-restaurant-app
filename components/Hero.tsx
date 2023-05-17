import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props {}

const Hero: NextPage<Props> = () => {
  const router = useRouter();

  const navigateContacts = () => {
    router.push("/contacts");
  };
  return (
    <div className="pt-48 pb-20 flex flex-col items-center">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl capitalize text-white w-3/4">
        Your favourite food delivered hot & fresh
      </h1>

      <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-white text-opacity-70 mt-4 w-3/4">
        Кухарі з HEALTHY SWITCHER займаються всіма підготовчими роботами, такими
        як чищення, нарізання та маринування, щоб ви могли приготувати свою
        свіжу домашню вечерю всього за 15 хвилин.
      </p>
      <button
        onClick={navigateContacts}
        className="mt-10 w-48 h-10 sm:w-52 sm:h-12 md:w-56 md:h-16 bg-green-700 text-center text-black text-base sm:text-lg md:text-xl font-bold rounded-[43px] hover:bg-green-500 hover:text-xl"
      >
        Залишити заявку
      </button>
    </div>
  );
};

export default Hero;
