import { Sparkles, Shirt, Baby, Brush, Search, TreePine } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Cleaning Services",
      description: "General house cleaning, deep cleaning, and move-in/move-out cleaning.",
      highlights: ["Affordable", "Reliable Cleaners", "Flexible Bookings"],
      icon: Sparkles,
      price: "From R360",
      featured: false,
    },
    {
      title: "Shoe Washing Services",
      description: "Bring your shoes back to life! Careful and professional cleaning.",
      highlights: ["ONLY R40 PER PAIR", "Discount for 3+ pairs"],
      icon: Shirt,
      price: "R40 / Pair",
      featured: true,
    },
    {
      title: "Laundry Services",
      description: "We wash, dry, and fold your clothes neatly so you don’t have to worry.",
      highlights: ["Wash & Fold", "Ironing Available"],
      icon: Brush,
      price: "Custom Quote",
      featured: false,
    },
    {
      title: "Nanny Services",
      description: "Trusted and caring nannies available to help take care of your children.",
      highlights: ["Vetted Staff", "Experienced", "Caring"],
      icon: Baby,
      price: "Custom Quote",
      featured: false,
    },
    {
      title: "Room Finder Services",
      description: "We help you find rooms quickly and safely.",
      highlights: ["R350 AGENT FEE", "No Scams", "Saves You Time"],
      icon: Search,
      price: "R350 Fee",
      featured: false,
      extraPrices: "R100 upfront, R250 after moving in",
    },
    {
      title: "Outdoor Cleaning",
      description: "Yard cleaning, sweeping, and general outdoor maintenance.",
      highlights: ["Yard Cleanup", "General Maintenance"],
      icon: TreePine,
      price: "Custom Quote",
      featured: false,
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-hot-pink uppercase tracking-wider">What We Do</h2>
          <p className="mt-2 text-3xl font-extrabold text-deep-black sm:text-4xl">
            Our Core Services
          </p>
          <div className="mt-4 w-24 h-1 bg-hot-pink mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-3xl p-8 border hover:shadow-xl transition-all duration-300 relative overflow-hidden group ${
                  service.featured ? 'border-hot-pink shadow-lg shadow-pink-100' : 'border-gray-100'
                }`}
              >
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-hot-pink text-white text-xs font-bold px-4 py-1 rounded-bl-xl z-10">
                    POPULAR
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                  service.featured ? 'bg-hot-pink text-white group-hover:bg-pink-600' : 'bg-pink-50 text-hot-pink group-hover:bg-pink-100'
                }`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-deep-black mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 min-h-[48px]">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm ${service.featured && idx === 0 ? 'font-bold text-hot-pink' : 'text-gray-700'}`}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Pricing</p>
                      <p className={`text-xl font-black ${service.featured ? 'text-hot-pink' : 'text-deep-black'}`}>
                        {service.price}
                      </p>
                      {service.extraPrices && (
                        <p className="text-xs text-gray-500 mt-1">{service.extraPrices}</p>
                      )}
                    </div>
                    <a 
                      href="https://wa.me/27679747656" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                        service.featured ? 'bg-hot-pink text-white hover:bg-pink-600' : 'bg-gray-100 text-deep-black hover:bg-gray-200'
                      }`}
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}