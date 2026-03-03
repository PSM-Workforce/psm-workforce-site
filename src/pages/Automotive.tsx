import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Car, Settings, BarChart, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Automotive() {
  return (
    <div className="bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1965&auto=format&fit=crop"
            alt="Automotive Manufacturing"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Automotive Industry Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Delivering cost management support programs to extend category market intelligence, scope development, and analytical depth for supply chain resilience.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Measurable Cost Management Results for Automotive OEMs & Tier 1 Suppliers</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                PSM Workforce delivers measurable cost management results for automotive OEMs, Tier 1 suppliers, and manufacturing partners across North America and globally.
              </p>
              <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r-lg">
                <p className="text-gray-900 font-medium">
                  Our firm supports has a team of 20+ year procurement, supply chain, and supplier development veterans—many with direct W-2 automotive experience at companies such as BMW, Hyundai, Kia, Porsche, General Motors, and Daimler Truck.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Cost Management Execution', icon: BarChart },
                { title: 'AI-Based Spend Technology', icon: Settings },
                { title: 'Supplier Development Programs', icon: Users },
                { title: 'Supply Chain Resilience', icon: Car },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow">
                  <item.icon className="w-8 h-8 text-gray-900 mb-4" />
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Partnerships */}
          <div className="bg-gray-900 text-white rounded-3xl p-12 md:p-16 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Strategic Partnerships & Industry Impact</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  PSM Workforce combines hands-on consulting with rapid-deployment technology to deliver enterprise-level impact at startup speed.
                </p>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Our experts have led transformation projects supporting supplier optimization, sustainability, and cost-reduction initiatives that scale across facilities and global operations.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We are proud of our growing engagement with OEMs and Tier I partners across North America and look forward to continuing to support technology and efficiency in the automotive supply chain.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop" 
                  alt="Automotive Assembly" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Personal Commitment */}
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Commitment to the Industry</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our connection to the automotive world runs deep. Many of our senior team members—and even our families—come from the shop floors and engineering teams of Chrysler, Ford, GM, and their supplier networks.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand the challenges firsthand and bring both professional and personal dedication to every client partnership.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Let's Build What's Next, Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Whether your goal is to optimize indirect spend, strengthen Tier I supplier performance, or integrate sustainability and analytics into your operations, PSM Workforce stands ready to deliver measurable results with efficient, scalable pricing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-xl"
            >
              Schedule a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
