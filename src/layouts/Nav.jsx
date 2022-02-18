import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import LinkTo from "../components/LinkTo";

const Nav = () => {
  return (
    <div className="absolute z-50 ">
      <div class="relative max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8 ">
        <nav
          class="relative  flex items-center justify-between sm:h-12 lg:justify-start"
          aria-label="Global"
        >
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <span class="sr-only">Workflow</span>
                <img class="lg:h-12  w-auto sm:h-8 h-8" src={logo} alt="logo" />
              </Link>
              <div class="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>

                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class=" md:block md:ml-10 md:pr-4 md:space-x-8">
            {/* <Link to="/" 
                      class="font-medium  text-gray-500 hover:text-gray-900"
                      activeClassName="active:underline"
                    >
                      
                    </Link> */}
            <LinkTo
              to={"/"}
              className={"font-medium  text-gray-500 hover:text-gray-900"}
              text={"Sobre nosotros"}
            />

            <LinkTo
              to={"/"}
              className={"font-medium  text-gray-500 hover:text-gray-900"}
              text={"Noticias"}
            />

            <LinkTo
              to={"/"}
              className={"font-medium  text-gray-500 hover:text-gray-900"}
              text={"Contacto"}
            />

            <LinkTo
              to={"/cursos"}
              className={"font-medium font-bold text-red-500 hover:text-red-700"}
              text={"Cursos"}
            />
            
          </div>
        </nav>
      </div>
                    {/* Burger Menu */}
      <div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right hidden">
        <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close main menu</span>

                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Product
            </a>

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Features
            </a>

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Marketplace
            </a>

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Company
            </a>
          </div>
          <a
            href="#"
            class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
          >
            {" "}
            Log in{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;