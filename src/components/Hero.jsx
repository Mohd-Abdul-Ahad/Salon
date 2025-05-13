import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <img
        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Luxury Salon"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          Experience Luxury Beauty
        </h1>
        <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
          Indulge in our premium salon services where elegance meets exceptional care. Our expert
          stylists are dedicated to bringing out your natural beauty.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Our Services
          </Link>
          <Link
            to="booking"
            smooth={true}
            duration={500}
            className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 border-2 border-white rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="services" smooth={true} duration={500} className="cursor-pointer">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;