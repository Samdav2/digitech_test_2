import { MapPin, Globe } from "lucide-react";

export default function Coverage() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-pink-50 opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-blue-50 opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-extrabold text-deep-black sm:text-4xl mb-10">
              Areas We Cover
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <div 
                  className="flex items-center bg-white px-8 py-5 rounded-2xl shadow-md border border-gray-100 hover:border-hot-pink transition-colors hover:-translate-y-1 transform duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4 shrink-0">
                    <Globe className="w-6 h-6 text-hot-pink" />
                  </div>
                  <span className="text-xl font-bold text-gray-800">Available Globally in Every Country</span>
                </div>
            </div>
            
            <p className="mt-10 text-gray-500 max-w-2xl mx-auto text-lg">
              We bring our premium services directly to you, no matter where you are. We are proudly available in every country around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}