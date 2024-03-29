import { NextPage } from "next";
import { Link, Element } from "react-scroll";

import { NavigateType } from "./NavigateType";

const navigation: NavigateType[] = [
  { id: 1, title: "Home", to: "home" },
  { id: 2, title: "Menu", to: "menu" },
  { id: 3, title: "About", to: "about" },
  { id: 4, title: "Contacts", to: "contacts" },
];

const Header: NextPage = () => {
  return (
    <header>
      <Element name="home">
        <div className="w-full fixed top-0 left-0 z-10 bg-gray-800 opacity-80 border-b border-opacity-10">
          <div className="max-w-screen-2xl flex flex-wrap justify-between items-center m-auto p-4">
            <div className="flex items-center">
              <Link
                to="home"
                className="text-green-500 text-sm ml-1 cursor-pointer"
              >
                HEALTHY SWITCHER
              </Link>
            </div>
            <nav className="md:flex items-center">
              <ul className="flex justify-between items-center w-full">
                {navigation.map(({ id, title, to }: NavigateType) => (
                  <li key={id}>
                    <Link
                      activeClass="active"
                      to={to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="transition-all text-gray-100 font-semibold inline-block py-3 px-2 border-b-2 border-transparent hover:text-white hover:border-white cursor-pointer"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Element>
    </header>
  );
};

export default Header;
