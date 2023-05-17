import { NextPage } from "next";
import Image from "next/image";
import Header from "./Header";
import Hero from "./Hero";

interface Props {}

const Layout: NextPage<Props> = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 w-full h-full">
        <Image
          className="w-full h-full object-cover"
          src="/images/hero.jpg"
          alt="Background Image"
          width={1440}
          height={1080}
        />
      </div>
      <div className="relative">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Layout;
