import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className="bg-white px-4 py-3 flex items-center justify-between">
      {/* Logo & Title */}
      <div className="flex items-center space-x-2">
        <FaUserCircle className="text-blue-600 text-2xl" />
        <span className="text-lg font-semibold text-gray-800">
          Modern Multi Speciality Hospital
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
        <Link to="/services" className="hover:text-blue-600">Services</Link>
        <Link to="/about" className="hover:text-blue-600">About Us</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </nav>

      {/* Buttons (Desktop) */}
      <div className="hidden md:flex space-x-3">
        <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-50 transition">
          Login
        </button>
        <button className="bg-blue-900 text-white px-4 py-1 rounded-full hover:bg-blue-800 transition">
          Sign Up
        </button>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-700">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md px-4 py-4 flex flex-col space-y-4 md:hidden z-50">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <div className="flex space-x-3">
            <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-50 transition w-full">
              Login
            </button>
            <button className="bg-blue-900 text-white px-4 py-1 rounded-full hover:bg-blue-800 transition w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
