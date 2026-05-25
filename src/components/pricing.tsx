import { ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-hot-pink uppercase tracking-wider">Transparent & Affordable</h2>
          <p className="mt-2 text-3xl font-extrabold text-deep-black sm:text-4xl">
            Pricing Summary
          </p>
          <p className="mt-4 text-xl text-gray-500">
            No hidden fees. Just clear, upfront pricing to help you plan.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Box 1 */}
            <div className="p-8 lg:p-12 flex flex-col justify-center text-center hover:bg-gray-50 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shoe Cleaning</h3>
              <div className="my-4 flex items-baseline justify-center">
                <span className="text-5xl font-black text-hot-pink">R40</span>
                <span className="text-gray-500 ml-2 font-medium">/ Pair</span>
              </div>
              <p className="text-sm text-gray-500 mb-6 bg-pink-50 text-hot-pink py-1 px-3 rounded-full inline-block mx-auto font-medium">
                Discount on 3+ Pairs!
              </p>
              <a href="https://wa.me/27679747656" className="text-hot-pink font-bold hover:text-pink-600 flex items-center justify-center">
                Book Cleaning <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Box 2 */}
            <div className="p-8 lg:p-12 flex flex-col justify-center text-center hover:bg-gray-50 transition-colors bg-gray-50/50">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Room Finder Fee</h3>
              <div className="my-4 flex items-baseline justify-center">
                <span className="text-5xl font-black text-deep-black">R350</span>
                <span className="text-gray-500 ml-2 font-medium">Total</span>
              </div>
              <div className="text-sm text-gray-500 space-y-1 mb-6">
                <p>R100 upfront</p>
                <p>R250 after moving in</p>
              </div>
              <a href="https://wa.me/27679747656" className="text-deep-black font-bold hover:text-hot-pink flex items-center justify-center">
                Find a Room <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Box 3 */}
            <div className="p-8 lg:p-12 flex flex-col justify-center text-center hover:bg-gray-50 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cleaning Services</h3>
              <div className="my-4 flex items-baseline justify-center">
                <span className="text-gray-500 mr-2 font-medium">From</span>
                <span className="text-5xl font-black text-deep-black">R360</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Depending on space and requirements
              </p>
              <a href="https://wa.me/27679747656" className="text-deep-black font-bold hover:text-hot-pink flex items-center justify-center">
                Get a Quote <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}