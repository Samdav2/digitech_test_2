import Link from "next/link";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-black text-white pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              City Sunny<span className="text-hot-pink">Services</span>
            </h2>
            <p className="text-gray-400 max-w-md text-lg">
              We take your stress away so you can focus on what matters most. Your trusted everyday service partner for a cleaner, easier life.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-gray-400 hover:text-hot-pink transition">Our Services</Link></li>
              <li><Link href="#areas" className="text-gray-400 hover:text-hot-pink transition">Areas We Cover</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-hot-pink transition">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-hot-pink mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">067 974 7656</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-hot-pink mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Mon-Sun: 7:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-hot-pink mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Tembisa, Clayville, Kempton Park, Midrand</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 rounded-3xl p-8 mb-12 text-center border border-white/10">
          <h2 className="text-3xl font-bold mb-6">Need a service right now?</h2>
          <a
            href="https://wa.me/27679747656"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-hot-pink hover:bg-pink-600 transition-transform hover:scale-105 shadow-xl shadow-pink-900/50"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Chat on WhatsApp: 067 974 7656
          </a>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} City Sunny Services. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}