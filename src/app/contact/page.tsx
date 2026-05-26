"use client";

import { MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-20 pb-24 bg-gray-50 flex-grow min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-deep-black sm:text-5xl">
            Get In <span className="text-hot-pink">Touch</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Have a question or ready to book a service? We are just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-deep-black mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center shrink-0 mr-4">
                  <Phone className="w-6 h-6 text-hot-pink" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call or WhatsApp</p>
                  <p className="text-lg font-bold text-gray-900">
                    <a href="https://wa.me/27679747656" target="_blank" rel="noopener noreferrer" className="hover:text-hot-pink transition-colors">
                      067 974 7656
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center shrink-0 mr-4">
                  <Clock className="w-6 h-6 text-hot-pink" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Operating Hours</p>
                  <p className="text-lg font-bold text-gray-900">24/7 Night Service Inclusive for Next Occasion Occurrence</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="w-6 h-6 text-hot-pink" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Locations Covered</p>
                  <p className="text-lg font-bold text-gray-900">Service Available Anywhere</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-100">
              <a
                href="https://wa.me/27679747656"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-hot-pink hover:bg-pink-600 transition-all shadow-xl shadow-pink-200"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Message Form Placeholder */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100">
             <h2 className="text-2xl font-bold text-deep-black mb-8">Send us a message</h2>
             <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-hot-pink focus:border-hot-pink outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-hot-pink focus:border-hot-pink outline-none transition-all" placeholder="067 974 7656" />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                  <select id="interest" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-hot-pink focus:border-hot-pink outline-none transition-all text-gray-700 bg-white">
                    <option>Cleaning Services</option>
                    <option>Shoe Washing Services</option>
                    <option>Laundry Services</option>
                    <option>Nanny Services</option>
                    <option>Room Finder Services</option>
                    <option>Outdoor Cleaning</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                   <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-hot-pink focus:border-hot-pink outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-deep-black hover:bg-gray-800 text-white rounded-xl font-bold transition-colors">
                  Submit Inquiry
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}