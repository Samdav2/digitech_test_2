import { Sparkles, Shirt, Baby, Brush, Search, TreePine, ChefHat, Footprints } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Cleaning Services",
      description: "Our professional cleaning services cover everything from general house cleaning to deep spring cleaning and specialized move-in/move-out details. We handle dusting, mopping, scrubbing, and sanitizing to ensure every corner of your home is flawlessly spotless and hygienic.",
      highlights: ["Affordable Pricing", "Reliable Cleaners", "Flexible Bookings"],
      icon: Sparkles,
      price: "From R360",
      featured: false,
    },
    {
      title: "Sneaker Wash Department",
      description: "Bring your most loved sneakers back to life! Our dedicated Sneaker Wash Department provides meticulous top-to-bottom cleaning, advanced tough stain removal, and a premium fresh finish. Your kicks will look, feel, and smell brand new.",
      highlights: ["Deep Cleaning", "Stain Removal", "Free Pick-up"],
      icon: Footprints,
      price: "From R40 / Pair",
      featured: true,
    },
    {
      title: "Shoe Washing Services",
      description: "Don’t let dirty shoes ruin your outfit. We offer careful, professional cleaning and restoration for all types of footwear—from formal leather shoes to everyday casual wear. Enjoy guaranteed quality and a generous discount for 3 or more pairs.",
      highlights: ["Careful Washing", "Professional Care", "Discount on 3+ pairs"],
      icon: Shirt,
      price: "R40 / Pair",
      featured: false,
    },
    {
      title: "Laundry Services",
      description: "Take a well-deserved break from the never-ending laundry chores. We expertly wash, dry, and neatly fold your clothes with the utmost care, guaranteeing a fresh, crisp, and ready-to-wear wardrobe returned right to your door.",
      highlights: ["Wash & Fold", "Ironing Available", "Careful Handling"],
      icon: Brush,
      price: "Custom Quote",
      featured: false,
    },
    {
      title: "Nanny Services",
      description: "Leave your little ones in safe hands. Our rigorously vetted and compassionate nannies are available to provide attentive, personalized care for your children, ensuring a safe, nurturing, and highly engaging environment right in your own home.",
      highlights: ["Vetted Staff", "Experienced", "Caring Nature"],
      icon: Baby,
      price: "Custom Quote",
      featured: false,
    },
    {
      title: "Room Finder Services",
      description: "Relocating made easy! We help you find safe, affordable, and comfortable rooms quickly. Skip the stress, avoid the scams, and save valuable time with our dedicated and highly reliable room-finding assistance.",
      highlights: ["R350 AGENT FEE", "No Scams", "Saves You Time"],
      icon: Search,
      price: "R350 Fee",
      featured: false,
      extraPrices: "R100 upfront, R250 after moving in",
    },
    {
      title: "Outdoor Cleaning",
      description: "Transform your exterior spaces into a spotless sanctuary. Our comprehensive outdoor maintenance team tackles heavy yard cleanup, thorough sweeping, debris removal, and general outdoor cleaning to dramatically enhance your property’s curb appeal.",
      highlights: ["Yard Cleanup", "General Maintenance", "Waste Removal"],
      icon: TreePine,
      price: "Custom Quote",
      featured: false,
    },
    {
      title: "Hire a Chef",
      description: "Experience five-star dining without leaving your house! Perfect for intimate family dinners or small private events. Our professional chefs bring their own premium equipment and culinary expertise directly to your kitchen for a customized, unforgettable meal.",
      highlights: ["Custom Menus", "Professional Chef", "In-Home Prep"],
      icon: ChefHat,
      price: "Custom Quote",
      featured: true, 
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden" id="services">
      {/* Decorative background blobs for a modern feel */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-300 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <span className="inline-block py-1.5 px-4 rounded-full bg-pink-100 text-hot-pink text-sm font-bold uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-deep-black tracking-tight mb-6">
            Exceptional Services for an <span className="text-hot-pink bg-clip-text text-transparent bg-gradient-to-r from-hot-pink to-purple-500">Easier Life</span>
          </h2>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isChef = service.title === "Hire a Chef";
            const isOutdoor = service.title === "Outdoor Cleaning";

            if (isOutdoor) {
              return (
                <div key={index} className="lg:col-span-3 mt-4 mb-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden border-2 border-green-200 shadow-xl shadow-green-100/50 flex flex-col lg:flex-row-reverse items-center gap-10 group transition-all duration-500 hover:shadow-2xl hover:shadow-green-200">
                    <Icon className="absolute -left-10 -top-10 w-[24rem] h-[24rem] text-green-600 opacity-5 group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-700 pointer-events-none" />
                    
                    <div className="flex-1 relative z-10 w-full text-center lg:text-left">
                      <div className="inline-flex items-center justify-center py-1.5 px-4 rounded-full bg-green-200/50 text-xs font-bold uppercase tracking-widest mb-4 border border-green-300 text-green-800">
                        🌿 Fresh & Clean Exteriors
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-green-950">
                        {service.title}
                      </h3>
                      
                      <p className="text-green-800/80 text-lg font-medium leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                        {service.highlights.map((hlt, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-green-200">
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-semibold text-sm text-green-900">{hlt}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                         <div className="flex flex-col text-center lg:text-left">
                          <span className="text-xs text-green-700 font-bold uppercase tracking-widest mb-1">Pricing</span>
                          <span className="text-2xl font-black text-green-950">{service.price}</span>
                        </div>
                        <a href="https://wa.me/27679747656" target="_blank" rel="noopener noreferrer" className="group/bookbtn bg-green-600 text-white px-8 py-3 rounded-2xl font-black shadow-lg shadow-green-600/30 hover:shadow-green-600/50 hover:bg-green-700 transition-all flex items-center gap-2">
                          Book Now
                          <svg className="w-5 h-5 transform group-hover/bookbtn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (isChef) {
              return (
                <div key={index} className="lg:col-span-3 mt-8">
                  {/* Banner-style layout for the Hero Chef Card */}
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] p-8 lg:p-14 relative overflow-hidden shadow-2xl text-white flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group hover:shadow-hot-pink/20 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-hot-pink/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Massive abstract icon */}
                    <Icon className="absolute -right-12 -bottom-12 w-[28rem] h-[28rem] text-white opacity-[0.03] rotate-[15deg] group-hover:scale-110 group-hover:rotate-[20deg] transition-all duration-700 pointer-events-none" />
                    
                    <div className="flex-1 relative z-10 w-full">
                      <div className="inline-flex items-center justify-center py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 text-pink-300 shadow-xl">
                        ✨ New & Exclusive
                      </div>
                      
                      <h3 className="text-5xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mb-8">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-10">
                        {service.highlights.map((hlt, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5">
                            <svg className="w-5 h-5 text-hot-pink shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-semibold text-sm text-gray-100">{hlt}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-8">
                        <a href="https://wa.me/27679747656" target="_blank" rel="noopener noreferrer" className="group/bookbtn bg-hot-pink text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-hot-pink/30 hover:shadow-hot-pink/50 hover:bg-pink-600 transition-all text-lg flex items-center gap-3">
                          Book a Chef
                          <svg className="w-5 h-5 transform group-hover/bookbtn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Starting at</span>
                          <span className="text-2xl font-black text-white">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Standard Service Cards
            return (
              <div 
                key={index} 
                className={`bg-white rounded-[2rem] p-8 lg:p-10 transition-all duration-500 relative overflow-hidden group flex flex-col h-full
                  ${service.featured ? 'border-2 border-hot-pink shadow-xl shadow-pink-100/50' : 'border border-gray-100 shadow-xl shadow-gray-200/40 hover:border-pink-200'}
                  hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-100/50
                `}
              >
                {/* Background watermark icon */}
                <Icon className={`absolute -right-6 -bottom-6 w-48 h-48 pointer-events-none transition-all duration-500 transform group-hover:-rotate-12 group-hover:scale-110 ${
                  service.featured ? 'text-hot-pink opacity-[0.03]' : 'text-gray-900 opacity-[0.02]'
                }`} />

                {service.featured && (
                  <div className="absolute top-0 right-0 bg-hot-pink text-white text-xs font-bold px-6 py-2 rounded-bl-[1.5rem] z-10 shadow-md transform origin-top-right">
                    POPULAR
                  </div>
                )}
                
                <div className="relative z-10 flex-grow flex flex-col">
                  <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    service.featured ? 'bg-gradient-to-br from-hot-pink to-pink-600 text-white shadow-lg shadow-pink-200' : 'bg-gray-50 text-deep-black group-hover:bg-pink-50 group-hover:text-hot-pink'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-deep-black mb-4 leading-tight group-hover:text-hot-pink transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-8 text-base leading-relaxed flex-grow">{service.description}</p>
                  
                  <div className="space-y-4 mb-10">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center group/item">
                        <div className="shrink-0 w-7 h-7 rounded-full bg-gray-50 group-hover/item:bg-hot-pink/10 flex items-center justify-center mr-3 transition-colors">
                          <svg className="w-4 h-4 text-gray-400 group-hover/item:text-hot-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-gray-700 group-hover/item:text-deep-black transition-colors">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100 mt-auto flex items-end justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Pricing</p>
                      <p className={`text-2xl font-black ${service.featured ? 'text-hot-pink' : 'text-deep-black'}`}>
                        {service.price}
                      </p>
                      {service.extraPrices && (
                        <p className="text-xs text-gray-500 mt-1.5 font-medium">{service.extraPrices}</p>
                      )}
                    </div>
                    
                    <a 
                      href="https://wa.me/27679747656" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn flex items-center justify-center h-12 rounded-xl px-5 transition-all duration-300 ${
                        service.featured 
                          ? 'bg-hot-pink text-white shadow-lg shadow-pink-200 hover:bg-pink-600 hover:-translate-y-1' 
                          : 'bg-gray-100 text-deep-black hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-xl'
                      }`}
                    >
                      <span className="font-bold text-sm mr-2 transition-all duration-300">Book</span>
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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