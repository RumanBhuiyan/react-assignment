import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-green-400">
      <div className="p-5 flex justify-center">
        <span className="fa">
          <i className="fab fa-shopify text-6xl"></i>
        </span>
      </div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className=" hover:bg-indigo-500 hover:text-white rounded-md px-3 py-2 text-lg font-medium outline"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="bg-gray-950 hover:bg-indigo-500 text-white rounded-md px-3 py-2 text-lg font-medium"
                >
                  Products
                </Link>
                <Link
                  to="/comments"
                  className=" hover:bg-indigo-500 hover:text-white rounded-md px-3 py-2 text-lg font-medium outline"
                >
                  Comments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Products
          </Link>
          <Link
            to="/comments"
            className="hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Comments
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
