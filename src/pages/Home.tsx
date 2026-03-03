import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Settings, ShieldCheck, Users, Zap, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Building"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
            Welcome to PSM Workforce
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            Procurement & Supply <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Management Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Driving cost efficiency, technology enablement, and supplier performance by augmenting or developing workforce professionals since 2012.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full text-lg font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              Partner With Us
            </Link>
            <Link
              to="/cost-management"
              className="px-8 py-4 rounded-full text-lg font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all transform hover:-translate-y-1"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Individually Smart. Collectively Brilliant.</h3>
            <p className="text-lg text-gray-600">
              We are an industry leader in Cost Management Execution Support, Custom Spend Technology, and Supplier Development Programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <BarChart3 className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Cost Management Resources</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hands-on project execution resources and workforce development driving complex, transformational procurement and indirect spend projects.
              </p>
              <Link to="/cost-management" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                <Settings className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Spend Technology & Data Analytics</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom data visualization and accelerated project analytics providing integrated, AI-powered dashboards and predictive modeling.
              </p>
              <Link to="/spend-technology" className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-800 group-hover:gap-2 transition-all">
                Explore tech <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <ShieldCheck className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Supplier Development</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tailored performance oversight assessments and reporting providing rapid on-site stabilization and corrective-action leadership.
              </p>
              <Link to="/supplier-development" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 group-hover:gap-2 transition-all">
                View programs <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800">
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-extrabold text-blue-400 mb-2">40+</div>
              <div className="text-sm font-medium tracking-widest uppercase text-blue-200">Fortune 1000 Clients & Orgs Served</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-extrabold text-blue-400 mb-2">14</div>
              <div className="text-sm font-medium tracking-widest uppercase text-blue-200">Engagement Territories & Countries</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-extrabold text-blue-400 mb-2">30+</div>
              <div className="text-sm font-medium tracking-widest uppercase text-blue-200">Integrated SMEs & Consultants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automotive Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1965&auto=format&fit=crop" 
                  alt="Automotive Manufacturing" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                <Zap className="w-4 h-4" /> Industry Focus
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Automotive Industry Solutions</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Delivering cost management support programs to extend category market intelligence, scope development, and analytical depth for supply chain resilience and ultimate supplier delivery.
              </p>
              <p className="text-gray-600 leading-relaxed">
                PSM Workforce delivers measurable cost management results for automotive OEMs, Tier 1 suppliers, and manufacturing partners across North America and globally. Our firm supports has a team of 20+ year procurement, supply chain, and supplier development veterans.
              </p>
              <div className="pt-4">
                <Link to="/automotive" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-md">
                  Learn more about our robust Automotive offering
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
