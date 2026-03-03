import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-500 transition-colors">
                PSM
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Workforce
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Driving cost efficiency, technology enablement, and supplier performance by augmenting or developing workforce professionals since 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">
              Solutions
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/cost-management" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cost Management Execution
                </Link>
              </li>
              <li>
                <Link to="/spend-technology" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI-Based Spend Technology
                </Link>
              </li>
              <li>
                <Link to="/supplier-development" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Supplier Development Programs
                </Link>
              </li>
              <li>
                <Link to="/automotive" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Automotive Industry Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/talent-development" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Talent Development
                </Link>
              </li>
              <li>
                <Link to="/tier-1-suppliers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Tier 1 Suppliers
                </Link>
              </li>
              <li>
                <Link to="/specialty-distribution" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Specialty Distribution
                </Link>
              </li>
              <li>
                <Link to="/proven-results" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Proven Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:gsean.williams@psmworkforce.com" className="hover:text-white transition-colors">
                  gsean.williams@psmworkforce.com
                </a>
              </li>
              
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>
                  Charlotte, NC<br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PSM Workforce. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
