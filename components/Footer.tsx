import { NextPage } from "next";
import { Element } from "react-scroll";

interface Props {}

const Footer: NextPage<Props> = () => {
  return (
    <Element className="w-full m-auto" name="contacts">
      <footer className="w-full flex flex-col items-center py-10 px-8 bg-gray-900">
        <div className="border-b-2 flex flex-col items-center w-full pb-10">
          <ul className="flex flex-wrap justify-center gap-12 w-3/4">
            <li className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-base text-white mt-1">
                Today 10:00 am - 7:00 pm
              </p>
              <p className="text-sm text-white opacity-50">Working hours</p>
            </li>
            <li className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>

              <p className="text-base text-white mt-1">
                Velyka Vasylkivska 100
              </p>
              <p className="text-sm text-white opacity-50">Get Directions</p>
            </li>
            <li className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <a
                className="text-base text-white flex flex-col items-center mt-1"
                href="tel:+380638332415 "
              >
                +38 (063)833 24 15
              </a>
              <p className="text-sm text-white opacity-50">Call Online</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center pt-10">
          <p className="text-green-500 text-base">HEALTHY SWITCHER</p>
          <p className="text-gray-400 text-center">
            © Designed by Yellow Snow. All Rights Reserved.{" "}
          </p>
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
