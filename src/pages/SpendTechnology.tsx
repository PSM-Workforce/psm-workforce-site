import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Database, Activity, LayoutDashboard, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function SpendTechnology() {
  return (
    <div className="bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-cyan-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="Data Analytics"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-cyan-900 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            AI-Based Spend Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto font-light"
          >
            AI-Driven Visibility, Predictive Spend Intelligence & Rapid Digital Transformation for OEMs and Tier I Suppliers
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Modern Automotive Supply Chains Demand Speed, Transparency, and Accurate Real-Time Data</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Legacy systems and fragmented platforms often prevent OEMs and Tier I suppliers from understanding true cost drivers, waste patterns, supplier performance, and cross-site spend profiles.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              PSM Workforce solves this challenge with US-based, in-house technology solutions built specifically for complex, multi-facility, multi-category supply chains. Our AI-powered tools integrate directly with client, OEM, or service provider systems—through APIs, flat files, or raw data ingestion—to create unified visibility and actionable insights.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-16 mb-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cloud-Based, AI-Enabled Tools Purpose-Built for Automotive Operations</h2>
            
            {/* Recyclytics */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-green-50 p-12 flex flex-col justify-center border-r border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <Activity className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Recyclytics™</h3>
                <p className="text-green-800 font-medium mb-4">Real-time waste, sustainability, and circular economy intelligence.</p>
                <p className="text-gray-600 leading-relaxed">Designed for facilities and environmental leaders navigating stringent OEM sustainability targets and global reporting requirements.</p>
              </div>
              <div className="lg:w-2/3 p-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Capabilities include:</h4>
                <ul className="space-y-4">
                  {[
                    "Real-time waste and recycling data capture",
                    "CO₂ reduction tracking and predictive sustainability modeling",
                    "Automated dashboards and regulatory reporting",
                    "Secure document repository for manifests, profiles, and audits"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-gray-700 italic">Perfect for automotive plants aiming to advance zero-waste goals, ESG reporting, or supplier waste compliance.</p>
                </div>
              </div>
            </div>

            {/* Facilytics */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/3 bg-blue-50 p-12 flex flex-col justify-center border-l border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <LayoutDashboard className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Facilytics™</h3>
                <p className="text-blue-800 font-medium mb-4">Facility operations and sustainability analytics for multi-site environments.</p>
                <p className="text-gray-600 leading-relaxed">A powerful solution for organizations managing complex facilities categories, service contracts, or outsourced operations.</p>
              </div>
              <div className="lg:w-2/3 p-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Capabilities include:</h4>
                <ul className="space-y-4">
                  {[
                    "Spend, service-level, and performance visibility across all facilities",
                    "Predictive analytics for cost, volume, and staffing models",
                    "Workflow automation and performance scorecards",
                    "Secure storage for contracts, SOPs, safety records, and compliance documents"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-gray-700 italic">Ideal for OEM campuses and Tier I operations needing better oversight of facility management spend and performance regardless of number of providers.</p>
                </div>
              </div>
            </div>

            {/* Xpendlytics */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-purple-50 p-12 flex flex-col justify-center border-r border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Xpendlytics™</h3>
                <p className="text-purple-800 font-medium mb-4">Total spend taxonomy and cross-enterprise visibility for large, distributed supply chains.</p>
                <p className="text-gray-600 leading-relaxed">Built for organizations with multiple ERPs, disconnected cost centers, or upcoming M&A activity.</p>
              </div>
              <div className="lg:w-2/3 p-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Capabilities include:</h4>
                <ul className="space-y-4">
                  {[
                    "Unified taxonomy across all direct or indirect spend categories",
                    "Automated cleansing, classification, and normalization of data",
                    "Predictive AI forecasting and category strategy insights",
                    "Line-item visibility across plants, divisions, and suppliers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-purple-500 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-gray-700 italic">Automotive clients use Xpendlytics™ to standardize spend intelligence before and after acquisitions, during integration cycles, and while centralizing procurement activity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fast Deployment */}
          <div className="bg-gray-900 text-white rounded-3xl p-12 md:p-16 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-yellow-400" /> Fast Deployment. Low Cost. High Impact.
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Unlike traditional procurement technology deployments that require months of integration, heavy IT involvement, and high licensing fees, PSM Workforce's automotive tech stack delivers immediate visibility and measurable financial impact.
                </p>
                <p className="text-xl font-medium text-cyan-400">
                  These platforms provide the digital transformation you didn't think was possible—at a cost you wouldn't expect.
                </p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <span className="text-lg font-medium">Deploys in under 90 days</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-2xl">💻</span>
                    </div>
                    <span className="text-lg font-medium">Requires minimal IT lift</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-2xl">📈</span>
                    </div>
                    <span className="text-lg font-medium">Scales seamlessly across plants and business units</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-2xl">💰</span>
                    </div>
                    <span className="text-lg font-medium">Starts at $75K one-time with $5K monthly support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Turn Your Data Into Insight. Turn Insight Into Action.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Whether you're preparing for a major sourcing initiative, improving sustainability reporting, centralizing spend visibility, or integrating new business units, PSM Workforce provides the platforms and intelligence to accelerate breakthroughs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-cyan-600 hover:bg-cyan-700 transition-colors shadow-xl"
            >
              Request a Technology Scoping Call <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
