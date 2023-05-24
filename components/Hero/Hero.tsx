import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

const Hero: NextPage = () => {
  const router = useRouter();

  const navigateContacts = () => {
    router.push("/contacts");
  };
  return (
    <section className="pt-48 pb-20 flex flex-col items-center relative z-5">
      <div className="bg-cover bg-center w-full h-full absolute left-0 top-0">
        <Image
          className="object-cover object-center"
          src="/images/hero.jpg"
          alt="Background Image"
          fill
        />
      </div>

      <div className="relative flex flex-col items-center">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl capitalize text-white w-3/4">
          Your favourite food delivered hot & fresh
        </h1>

        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-white text-opacity-70 mt-4 w-3/4">
          Кухарі з HEALTHY SWITCHER займаються всіма підготовчими роботами,
          такими як чищення, нарізання та маринування, щоб ви могли приготувати
          свою свіжу домашню вечерю всього за 15 хвилин.
        </p>
        <button
          type="button"
          onClick={navigateContacts}
          className="mt-10 w-48 h-14 sm:w-52 sm:h-14 md:w-48 md:h-16 bg-green-700 text-center text-white text-base sm:text-lg md:text-lg rounded-[43px] hover:bg-green-600 transition-all"
        >
          Залишити заявку
        </button>
      </div>
    </section>
  );
};

export default Hero;
