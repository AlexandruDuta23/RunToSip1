import React from 'react';
import { Instagram, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/Logo RunToSip (1).png" 
                alt="Run to Sip Logo" 
                className="h-16 w-auto"
              />
              <span className="text-3xl font-bold">Run to Sip</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Bucharest's premier running community that combines fitness with coffee culture. 
              Join us every Sunday for unforgettable adventures around the city.
            </p>
            <a
              href="https://www.instagram.com/runtosip/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <Instagram className="h-5 w-5" />
              <span>@runtosip</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Schedule', 'Gallery', 'Join Us'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace(' ', ''));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">Bucharest, Romania</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">Sundays, 9:00 AM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">DM us on Instagram</span>
              </div>
            </div>
          </div>
        </div>

        {/* Running Schedule */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-center">Weekly Running Schedule</h3>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">Every Sunday</div>
              <div className="text-xl text-gray-300 mb-2">9:00 AM Start</div>
              <div className="text-gray-400">
                Different locations across Bucharest • All fitness levels welcome
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="/Logo RunToSip (1).png" 
              alt="Run to Sip Logo" 
              className="h-8 w-auto"
            />
            <p className="text-gray-400">
              © 2024 Run to Sip. Made with ❤️ and ☕ in Bucharest.
            </p>
          </div>
          <p className="text-gray-500 text-sm">
            Running together, sipping together, growing together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;