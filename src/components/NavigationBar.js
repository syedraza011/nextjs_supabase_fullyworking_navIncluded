import Link from "next/link";

function NavigationBar() {
  return (
    <nav className="sticky bg-[#9ca3af] shadow-lg">
      <div className="max-w-8l mx-auto px-2">
        <div className="flex justify-between">
          <div className="flex space-x-20">
            <div>
              {/* Website Logo */}
              <Link href="/" className="companyLogo">
                <img src="starbound.png" alt="Logo" className="starlogo" />
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden items-center space-x-1 md:flex">
              <Link
                href="/"
                className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
              >
                About
              </Link>
              <a
                href="/flights"
                className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
              >
                Flights
              </a>
              {/* <Link href="/src/pages/flights.js">Podcast</Link> */}
              <Link
                href="/destinations"
                className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
              >
                Destinations
              </Link>

              <Link
                href="/training"
                className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
              >
                Training
              </Link>
              {/* <Link
                href="/flight"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                n_Flight
              </Link> */}
              <Link
                href="/store"
                className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
              >
                Store
              </Link>
              <Link
                href="/contact"
                className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
              >
                Contact
              </Link>
              <Link
                href="/checkout"
                className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
              >
                Checkout
              </Link>
              <Link
                href="/users"
                className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
              >
                Users
              </Link>
              <Link
                href="/date"
                className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
              >
                Date
              </Link>
              <Link
                href="/time"
                className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
              >
                time
              </Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden items-center space-x-3 md:flex ">
            <Link
              // href="/page"
              // href="/index"
              // href="/Authprovider"
              // href="/layout"
              // href="/middleware"
              // href="/head"
              href="/SignIn"
              className="rounded bg-blue-600 px-2 py-2 font-medium text-white transition duration-300 hover:bg-blue-800"
            >
              Log In
            </Link>
            <Link
              href="/account"
              className="rounded bg-blue-600 px-2 py-2 font-medium text-white transition duration-300 hover:bg-blue-800"
            >
              Account
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button className="mobile-menu-button outline-none">
              <svg
                className=" h-6 w-6 text-blue-600 hover:text-blue-800 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className="mobile-menu hidden">
        <ul className="">
          <li>
            <div
              href="/"
              className="block px-2 py-4 text-sm transition duration-300 hover:bg-blue-600"
            >
              Home
            </div>
          </li>
          <li>
            <div
              href="/about"
              className="h-6 w-6 text-blue-600 hover:text-blue-800 "
            >
              about
            </div>
          </li>
          <li>
            <div
              href="/flights"
              className="px-2 py-4 font-bold text-gray-800 transition duration-300 hover:text-blue-600"
            >
              Flights
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
