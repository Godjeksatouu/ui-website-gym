import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">gym</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your body and mind with our state-of-the-art fitness center and expert trainers.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/classes" className="text-gray-400 hover:text-white transition-colors">Classes</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Membership</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Classes</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Strength Training</span></li>
              <li><span className="text-gray-400">Cardio</span></li>
              <li><span className="text-gray-400">Yoga</span></li>
              <li><span className="text-gray-400">CrossFit</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@gym.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 gym. All rights reserved.</p>
          <div className="mt-4 text-sm">
            <p>
              Developed by{' '}
              <a
                href="https://www.instagram.com/satou.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                satou.dev
              </a>
              {' '}& {' '}
              <a
                href="https://visuelmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Visuel Media Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;