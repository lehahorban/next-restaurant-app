// import { NextPage } from "next";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { useState } from "react";
// import NextLink from "next/link";
// interface Props {}

// const navigation = [
//   { id: 1, path: "/", title: "Home" },
//   { id: 2, path: "/about", title: "About" },
//   { id: 3, path: "/contacts", title: "Contacts" },
// ];

// const Header: NextPage<Props> = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <header className="w-full fixed bg-gray-800 opacity-80 flex justify-between items-center p-4 border-b border-opacity-10">
//       <div
//         onClick={toggleTheme}
//         className="w-10 h-5 bg-green-700 rounded-full shadow-inner p-0.5"
//       >
//         <div
//           className={`bg-gray-500 w-4 h-4 rounded-full transform transition-all duration-300 ${
//             darkMode
//               ? "translate-x-5 bg-yellow-400"
//               : "translate-x-0 bg-blue-400"
//           }`}
//         ></div>
//       </div>
//       <nav className="md:flex items-center">
//         <ul className="flex justify-between items-center w-full">
//           {navigation.map(({ id, path, title }) => (
//             <li key={id}>
//               <NextLink
//                 className="transition-all text-gray-100 font-semibold inline-block py-3 px-2 border-b-2 border-transparent hover:text-white hover:border-white"
//                 href={path}
//               >
//                 {title}
//               </NextLink>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { NextPage } from "next";
import { Link } from "react-scroll";
import { Element } from "react-scroll";
import { useState } from "react";
import NextLink from "next/link";

interface Props {}

const navigation = [
  { id: 1, path: "/", title: "Home", to: "home" },
  { id: 2, path: "/about", title: "About", to: "about" },
  { id: 3, path: "/contacts", title: "Contacts", to: "contacts" },
];

const Header: NextPage<Props> = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Element name="home">
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
            {navigation.map(({ id, path, title, to }) => (
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
      </header>
    </Element>
  );
};

export default Header;
