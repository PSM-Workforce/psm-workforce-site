import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle2, ArrowRight, BarChart3, Building2, Stethoscope } from 'lucide-react';

export default function ProvenResults() {
  return (
    <div className="bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-emerald-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Data Analytics"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-900 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Proven Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto font-light"
          >
            At PSM Workforce, results define our reputation.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Every engagement reflects our commitment to measurable performance, transparency, and speed.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether for an automotive OEM, a healthcare prime, or a global biopharmaceutical company, we deliver more than advice—we deliver results.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-16 mb-24">
            {/* Case Study 1 */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-emerald-50 p-12 flex flex-col justify-center border-r border-gray-100">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">$20M/yr USD Waste Management & Circularization</h3>
                <p className="text-emerald-800 font-medium mb-4">Leading Automotive Manufacturer</p>
                <p className="text-gray-600 leading-relaxed">Challenge: Rationalize waste and recycling operations, increase sustainability credits, and reduce costs across multiple departments.</p>
              </div>
              <div className="lg:w-2/3 p-12 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Approach</h4>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Conducted a comprehensive market assessment and cost forecast</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Led cross-functional scope-of-work development and vendor transition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Implemented digital spend tracking, KPI dashboards, and automated sustainability reporting</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <h4 className="text-xl font-bold text-emerald-900 mb-4">Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">$2.2M</div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">$1.2M</div>
                      <div className="text-sm text-gray-600">Recycling Credits</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">10×</div>
                      <div className="text-sm text-gray-600">ROI in Year 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/3 bg-blue-50 p-12 flex flex-col justify-center border-l border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">$173M/yr USD Integrated Facilities Transformation</h3>
                <p className="text-blue-800 font-medium mb-4">Multinational Biopharmaceutical Company</p>
                <p className="text-gray-600 leading-relaxed">Challenge: Required vendor consolidation and improved oversight across 24 global sites.</p>
              </div>
              <div className="lg:w-2/3 p-12 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Approach</h4>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Reduced 200 vendors to 7 strategic partners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Standardized governance frameworks and automated global data reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Optimized payment terms and supplier performance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">$27M</div>
                      <div className="text-sm text-gray-600">Generated Savings</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">$10.3M</div>
                      <div className="text-sm text-gray-600">Working Capital Released</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">12.5×</div>
                      <div className="text-sm text-gray-600">ROI & Stronger Compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-purple-50 p-12 flex flex-col justify-center border-r border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Stethoscope className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">$290M Addressable Spend Cost Out Initiative</h3>
                <p className="text-purple-800 font-medium mb-4">National Healthcare Facilities Contractor</p>
                <p className="text-gray-600 leading-relaxed">Challenge: Sought to resource equipment and restructure labor to drive savings and improve supplier performance.</p>
              </div>
              <div className="lg:w-2/3 p-12 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Approach</h4>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Implemented spend taxonomy and sourcing automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Deployed supplier outreach and engagement strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">Created analytics tools for performance tracking</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                  <h4 className="text-xl font-bold text-purple-900 mb-4">Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">$16.2M</div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">↑</div>
                      <div className="text-sm text-gray-600">Efficiency & Alignment</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">10.8×</div>
                      <div className="text-sm text-gray-600">ROI in Year 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Clients Choose Us */}
          <div className="bg-gray-900 text-white rounded-3xl p-12 md:p-16 mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">What Sets PSM Workforce Apart</h2>
              <p className="text-lg text-gray-300">When evaluating partners, our clients consistently highlight three things:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Execution Depth</h3>
                <p className="text-gray-400 leading-relaxed">Our team has led sourcing initiatives for Fortune 1000 companies and OEM networks worldwide.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Transparency & Measurability</h3>
                <p className="text-gray-400 leading-relaxed">Every engagement includes ROI reporting, digital dashboards, and quantifiable KPIs.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-6">
                  <ArrowRight className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Speed & Flexibility</h3>
                <p className="text-gray-400 leading-relaxed">Our consulting and technology teams deploy in weeks, not months—scaling to meet your pace and priorities.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ready to See Results?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Whether your challenge is reducing supplier spend, improving governance, or integrating sustainability into your supply chain, PSM Workforce delivers more than advice—we deliver results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xl"
            >
              Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
