import React from "react";
import logo from '../logo192.png';

export default function Navbar(props) {  
  return (
    <>
      <nav className={`border-gray-200 px-2 sm:px-4 py-5 rounded bg-${props.mode === 'white' ? 'gray-900':'gray-100'}`}>
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-10"
              alt="Flowbite Logo"
            />
            <span className={`self-center text-xl font-semibold whitespace-nowrap text-${props.mode === 'white' ? 'white':'black'}`}>
            convert case
            </span>
          </a>
          <div className="flex md:order-2">
            <div className="hidden relative mr-3 md:mr-0 md:block">
              <div className="flex justify-center">
                <button
                  type="button"
                  data-toggle-dark="light"
                  className={`flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-${props.mode === 'white' ? 'white':'black'} rounded-lg border-0 border-gray-200 toggle-dark-state-example focus:z-10 `}
                  onClick={props.toggleMode}
                >
                  <svg
                    data-toggle-icon="moon"
                    className={`w-4 h-4 ${props.mode === 'white' ? 'hidden':'block'}`}
                    fill="#fff"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    data-toggle-icon="sun"
                    className={`w-4 h-4 ${props.mode === 'white' ? 'block':'hidden'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="hidden">Toggle dark mode</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className={`block py-2 pr-4 pl-3 text-${props.mode === 'white' ? 'white':'balck'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-gray-700`}
                  aria-current="page"
                >
                  {props.nav1}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 pr-4 pl-3 text-${props.mode === 'white' ? 'white':'balck'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-gray-700`}
                >
                  {props.nav2}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 pr-4 pl-3 text-${props.mode === 'white' ? 'white':'balck'} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent border-gray-700`}
                >
                  {props.nav3}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
