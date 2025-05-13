import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-serif font-bold text-pink-600">Your Salon</span>
          <span className="text-3xl font-serif font-bold text-gray-800">name</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-pink-600 font-medium cursor-pointer transition-colors"
          >
            Home
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-pink-600 font-medium cursor-pointer transition-colors"
          >
            Services
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-pink-600 font-medium cursor-pointer transition-colors"
          >
            Our Team
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-pink-600 font-medium cursor-pointer transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="booking"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-pink-600 font-medium cursor-pointer transition-colors"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 flex flex-col space-y-1">
            <span
              className={`h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`h-0.5 bg-gray-800 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="container mx-auto px-6 py-20 flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col space-y-8 text-center">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-2xl text-gray-800 hover:text-pink-600 font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="text-2xl text-gray-800 hover:text-pink-600 font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="team"
                smooth={true}
                duration={500}
                className="text-2xl text-gray-800 hover:text-pink-600 font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                to="gallery"
                smooth={true}
                duration={500}
                className="text-2xl text-gray-800 hover:text-pink-600 font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="booking"
                smooth={true}
                duration={500}
                className="text-2xl text-gray-800 hover:text-pink-600 font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;