import React, { useState } from "react"
import { FaApple, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [bagOpen, setBagOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleSearch = () => {
    setBagOpen(false)
    setSearchOpen(!searchOpen)
  }
  const toggleBag = () => {
    setSearchOpen(false)
    setBagOpen(!bagOpen)
  }

  const menuItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <>
      <header className="bg-white sticky top-0 z-20 border-b border-gray-200">
        
        {/* Search Bar */}
        {searchOpen && (
          <div className="absolute inset-0 bg-white flex items-center px-4 animate-slideDown">
            <FaSearch className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search apple.com"
              autoFocus
              className="flex-1 outline-none text-gray-700 text-sm"
            />
            <FaTimes
              className="ml-3 cursor-pointer text-gray-500"
              onClick={() => setSearchOpen(false)}
            />
          </div>
        )}

        {/* Shopping Bag */}
        {bagOpen && (
          <div className="absolute inset-x-0 top-0 bg-white px-6 py-6 animate-slideDown shadow-md">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Your Bag</h2>
              <FaTimes
                className="cursor-pointer text-gray-500"
                onClick={() => setBagOpen(false)}
              />
            </div>
            <div className="mt-2 text-gray-600 text-sm">
              Your shopping bag is empty.
            </div>
          </div>
        )}

        {/* Navbar Main */}
        <div className="flex justify-between items-center px-4 py-4">
          <div className="text-xl cursor-pointer">
            <FaApple />
          </div>

          <nav className="hidden md:flex gap-10 text-sm">
            {menuItems.map((item, index) => (
              <span
                key={index}
                className="hover:text-gray-500 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <FaSearch className="cursor-pointer" onClick={toggleSearch} />
            <FaShoppingBag className="cursor-pointer" onClick={toggleBag} />
            <FaBars className="cursor-pointer md:hidden" onClick={toggleMenu} />
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 w-[70%] md:w-[40%] h-full bg-white z-50 shadow-lg transform transition-transform duration-1000 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex justify-end p-4">
              <FaTimes className="cursor-pointer" onClick={toggleMenu} />
            </div>
            <ul className="flex flex-col items-center px-8 gap-6 mt-4 text-lg">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-gray-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Promo Banner */}
      <div className="flex justify-center py-2 bg-gray-50">
        <p className="text-sm font-semibold mx-8 text-center">
          Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards.
          <a href="#" className="text-blue-500 hover:underline">
            {" "}
            Shop
          </a>
        </p>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out forwards;
          }
        `}
      </style>
    </>
  )
}

export default Navbar
