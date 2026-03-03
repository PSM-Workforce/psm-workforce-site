import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Target, Users, ArrowRight } from 'lucide-react';

export default function CostManagement() {
  return (
    <div className="bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            alt="Business Meeting"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Cost Management Execution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light"
          >
            Our execution support engagements typically generate a 4–10× ROI. Let our team support high-impact savings, faster milestones, and stronger supplier governance.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Proven Model for Sustainable Cost Reduction</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Managing large, complex, and cross-functional indirect categories requires more than a traditional sourcing approach—it demands deep market intelligence, structured execution, and the ability to influence stakeholders across engineering, operations, finance, and leadership.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                PSM Workforce delivers exactly that. Our team leads high-impact, cross-functional cost optimization and sourcing initiatives across categories that are often fragmented, under-managed, or embedded with longstanding incumbent suppliers.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-blue-900 font-medium">
                  We combine years of category expertise, real market data, and established supplier networks to deliver measurable value—often accelerating deliverables and savings.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Facilities', icon: Target },
                { title: 'Waste Management', icon: TrendingUp },
                { title: 'Construction', icon: Users },
                { title: 'Capital Projects', icon: Target },
                { title: 'Environmental Services', icon: TrendingUp },
                { title: 'MRO', icon: Users },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow">
                  <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Value Add Section */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16 mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Add the Most Value</h2>
              <p className="text-lg text-gray-600">Organizations rely on PSM Workforce when they need to:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Evaluate, restructure, or transition long-term incumbents due to cost, performance, or compliance issues",
                "Accelerate market intelligence, scope development, and budget planning to meet urgent operational timelines",
                "Strengthen governance, supplier oversight, and digitalized performance metrics",
                "Integrate sustainability and circularity strategies into sourcing, operations, and contract structures",
                "Build cross-functional alignment across internal stakeholders to prevent delays and ensure successful implementation"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-100 rounded-full p-1">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* End-to-End Capabilities */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">End-to-End Delivery Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Market Assessment & Cost Forecasting",
                  desc: "Natural market benchmarks, pricing models, and supplier intelligence to ensure competitive cost visibility."
                },
                {
                  title: "Scope-of-Work Development & Sourcing Execution",
                  desc: "Clear, comprehensive SOWs that align engineering, operations, and finance—paired with structured RFx management."
                },
                {
                  title: "Contract Negotiation & Governance Advisory",
                  desc: "Strategies that reduce risk, strengthen accountability, and align cost with performance expectations."
                },
                {
                  title: "Supplier Transition & Performance Oversight",
                  desc: "Hands-on guidance to ensure seamless transitions, phased implementation, and minimal operational disruption."
                },
                {
                  title: "Digital Dashboards & KPI Reporting",
                  desc: "Real-time visibility into spend, performance, recycling credits, compliance, and category-level trends."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 transition-colors group">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-blue-900 text-white rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern-2" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern-2)" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Turn Complex Spend into Strategic Advantage</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                Let's build your next cost-management success story together. Schedule a discovery call or request a category assessment today.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-blue-900 bg-white hover:bg-blue-50 transition-colors shadow-xl"
              >
                Schedule a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
