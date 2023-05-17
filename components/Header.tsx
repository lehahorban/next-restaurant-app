import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
interface Props {}

const navigation = [
  { id: 1, path: "/", title: "Home" },
  { id: 2, path: "/about", title: "About" },
  { id: 3, path: "/contacts", title: "Contacts" },
];

const Header: NextPage<Props> = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="w-full fixed bg-gray-800 opacity-80 flex justify-between items-center p-4 border-b border-opacity-10">
      <div
        onClick={toggleTheme}
        className="w-10 h-5 bg-green-700 rounded-full shadow-inner p-0.5"
      >
        <div
          className={`bg-gray-500 w-4 h-4 rounded-full transform transition-all duration-300 ${
            darkMode
              ? "translate-x-5 bg-yellow-400"
              : "translate-x-0 bg-blue-400"
          }`}
        ></div>
      </div>
      <nav className="md:flex items-center">
        <ul className="flex justify-between items-center w-full">
          {navigation.map(({ id, path, title }) => (
            <li key={id}>
              <Link
                className="transition-all text-gray-100 font-semibold inline-block py-3 px-2 border-b-2 border-transparent hover:text-white hover:border-white"
                href={path}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
