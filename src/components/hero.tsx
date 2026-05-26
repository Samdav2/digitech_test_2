import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pb-0" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center lg:pb-32">
            <div>
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-hot-pink bg-pink-100 mb-6">
                Premium Services, Affordable Prices
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-deep-black sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">YOUR TRUSTED EVERYDAY</span>
                <span className="block text-hot-pink mt-2">SERVICE PARTNER</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 sm:max-w-xl">
                We take your stress away so you can focus on what matters most. Reliable, affordable, and professional services to individuals and families.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4 space-y-4 sm:space-y-0">
                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-200 text-base font-bold rounded-full text-deep-black bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 text-gray-400" />
                </a>
                <a
                  href="https://wa.me/27679747656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-full text-white bg-hot-pink hover:bg-pink-600 transition-all shadow-xl shadow-pink-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 lg:relative">
            <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden bg-white aspect-[4/5] md:aspect-[3/2] lg:aspect-auto h-full min-h-[400px]">
              {/* Note: In a real app, you'd use next/image with actual photos */}
              <div className="absolute inset-0 bg-gradient-to-tr from-hot-pink/20 to-transparent mix-blend-multiply z-10 rounded-2xl pointer-events-none" />
              <div className="absolute inset-0 bg-gray-100 flex flex-col pt-10">
                <div className="flex-1 grid grid-cols-2 gap-2 p-2 relative h-full">
                  <div 
                    className="rounded-xl overflow-hidden shadow-inner h-full flex flex-col justify-end p-4 relative group bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800')" }}
                  >
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                     <span className="text-white font-bold z-10 drop-shadow-md">Sparkling Clean</span>
                     <div className="absolute inset-0 bg-hot-pink/10 group-hover:bg-hot-pink/20 transition-colors"></div>
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <div 
                      className="rounded-xl flex-1 overflow-hidden shadow-inner flex flex-col justify-end p-4 relative group bg-cover bg-center"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=600')" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <span className="text-white font-bold z-10 drop-shadow-md">Fresh Laundry</span>
                    </div>
                    <div 
                      className="rounded-xl h-1/3 min-h-[100px] overflow-hidden shadow-inner flex flex-col justify-center items-center relative group bg-cover bg-center"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600')" }}
                    >
                       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                       <span className="text-white font-bold z-10 drop-shadow-md">Shoe Care</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 pr-6 pl-10 border border-gray-100 z-20 transform rotate-[-2deg]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Customer Rating</p>
                    <p className="text-lg font-bold text-deep-black">100% Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}