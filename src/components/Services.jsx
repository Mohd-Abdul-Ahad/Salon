const services = [
  {
    id: 1,
    title: "Hair Styling",
    description:
      "Expert haircuts and styling tailored to your unique features and personality. Our stylists stay updated with the latest trends.",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    price: "$60+",
  },
  {
    id: 2,
    title: "Hair Coloring",
    description:
      "From subtle highlights to bold transformations, our coloring specialists use premium products for stunning, healthy results.",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    price: "$90+",
  },
  {
    id: 3,
    title: "Manicure & Pedicure",
    description:
      "Luxurious nail care treatments using the finest products. Choose from classic to gel polish or indulge in our spa manicure.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$45+",
  },
  {
    id: 4,
    title: "Facials & Skincare",
    description:
      "Rejuvenating facials customized for your skin type. Our estheticians use medical-grade products for visible results.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$80+",
  },
  {
    id: 5,
    title: "Makeup Artistry",
    description:
      "Professional makeup application for any occasion. From natural day looks to glamorous evening transformations.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$75+",
  },
  {
    id: 6,
    title: "Spa Treatments",
    description:
      "Relax and rejuvenate with our selection of body treatments, massages, and waxing services in a serene environment.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$120+",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of beauty services using only the highest quality products
            and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                  <span className="text-white text-xl font-medium bg-pink-600 py-1 px-4 rounded-full">
                    {service.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-pink-600 font-medium hover:text-pink-700 transition-colors">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;