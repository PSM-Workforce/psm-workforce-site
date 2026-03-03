import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Package, Heart, ShieldCheck, Box, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SpecialtyDistribution() {
  return (
    <div className="bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-rose-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            alt="Warehouse Distribution"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-rose-900 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Specialty Distribution & Logistics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-rose-100 max-w-3xl mx-auto font-light"
          >
            Distribution & Fulfillment Solutions for Employee Well-being or Client Engagement
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Built During Crisis. Scaled for Everyday Excellence.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              During the height of COVID-19, our clients asked for help solving an urgent problem: "Can PSM Workforce manage sourcing, inventory, and delivery of essential supplies so our teams stay safe and operational?"
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We not only said yes — we built a full-service distribution and fulfillment operation to support our clients across the country. Today, that effort has evolved into a multi-million-dollar employee and client outreach distribution business located in Charlotte, NC.
            </p>
          </div>

          {/* Solution Delivery Includes */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Solution Delivery Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pantry */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                  <Heart className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pantry & Medical Cabinet Distribution</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reliable, scheduled replenishment for workplace pantry essentials, health products, or pharmacy items—ensuring your workforce always have what they need to operate.
                </p>
              </div>

              {/* Gifting */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                  <Package className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Employee Benefits & Gifting Fulfillment</h3>
                <p className="text-gray-600 leading-relaxed">
                  End-to-end kitting, assembly, and shipping of branded boxes, employee care packages, recognition gifts, and onboarding experiences that strengthen workforce culture and engagement.
                </p>
              </div>

              {/* Kitting */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                  <Box className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Kitting & Bundling</h3>
                <p className="text-gray-600 leading-relaxed">
                  High-quality, compliant packaging and assembly for programs ranging from wellness initiatives to safety kits, promotional campaigns, and product rollouts—customized to your requirements.
                </p>
              </div>

              {/* PPE */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                  <ShieldCheck className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Safety & PPE Distribution</h3>
                <p className="text-gray-600 leading-relaxed">
                  End-to-end specialty sourcing, inventory management, and multi-site fulfillment of PPE and workplace safety supplies.
                </p>
              </div>
            </div>
          </div>

          {/* Why Clients Choose Us */}
          <div className="bg-gray-50 rounded-3xl p-12 md:p-16 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Clients Choose PSM Workforce for Distribution</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Charlotte, NC Distribution Center</h4>
                      <p className="text-gray-600">FDA and DEA registered operation supporting national fulfillment needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Built for Enterprise</h4>
                      <p className="text-gray-600">Designed to support Fortune 1000 clients, Tier I suppliers, and multi-site or multi-country operations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Speed & Accuracy</h4>
                      <p className="text-gray-600">Streamlined workflows, digital tracking, and quality oversight ensure consistent delivery.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Scalable Teams & Processes</h4>
                      <p className="text-gray-600">Expandable capacity for seasonal surges, program launches, or emergency demand.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1935&auto=format&fit=crop" 
                  alt="Logistics" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Let's Solve Your Distribution Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Whether you manage multiple sites, face limited storage, or need a partner to run complex employee or customer fulfillment programs, PSM Workforce can design a turnkey solution tailored to your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-xl"
            >
              Call Us — We're Here to Help <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
