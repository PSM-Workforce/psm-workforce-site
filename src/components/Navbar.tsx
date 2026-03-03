import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '#',
    dropdown: [
      { name: 'Cost Management', path: '/cost-management' },
      { name: 'Spend Technology', path: '/spend-technology' },
      { name: 'Supplier Development', path: '/supplier-development' },
    ],
  },
  { name: 'Automotive', path: '/automotive' },
  { name: 'Talent Development', path: '/talent-development' },
  { name: 'Tier 1 Suppliers', path: '/tier-1-suppliers' },
  { name: 'Specialty Distribution', path: '/specialty-distribution' },
  { name: 'Proven Results', path: '/proven-results' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className={clsx(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-800 transition-colors">
                PSM
              </div>
              <span className={clsx("font-bold text-xl tracking-tight", scrolled ? "text-gray-900" : "text-white")}>
                Workforce
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button
                    className={clsx(
                      'px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors',
                      scrolled ? 'text-gray-700 hover:text-blue-900 hover:bg-gray-50' : 'text-gray-100 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={clsx(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      location.pathname === link.path
                        ? scrolled ? 'text-blue-900 bg-blue-50' : 'text-white bg-white/20'
                        : scrolled ? 'text-gray-700 hover:text-blue-900 hover:bg-gray-50' : 'text-gray-100 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
                      >
                        <div className="py-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx(
                "p-2 rounded-md",
                scrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" : "text-gray-200 hover:text-white hover:bg-white/10"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-base font-medium text-gray-900">
                        {link.name}
                      </div>
                      <div className="pl-6 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-blue-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={clsx(
                        'block px-3 py-2 rounded-md text-base font-medium',
                        location.pathname === link.path
                          ? 'text-blue-900 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
