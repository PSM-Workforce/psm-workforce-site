import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Wrench, Activity, Users, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SupplierDevelopment() {
  return (
    <div className="bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
            alt="Manufacturing Plant"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Supplier Development Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto font-light"
          >
            Rapid Response Support for Tier I & Tier II Supplier Stability, Launch Readiness, and Performance Recovery
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">When production, quality, or delivery issues threaten operational continuity, speed and experience matter.</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                PSM Workforce's Supplier Development Deployment Team provides rapid, on-site support for Tier I and Tier II suppliers, helping OEMs and major manufacturers stabilize risk, protect production flow, and prevent costly disruptions.
              </p>
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                <p className="text-indigo-900 font-medium">
                  Whether pre-launch, mid-launch, or during a recovery effort, we provide the structured oversight and hands-on support required to restore performance and maintain OEM expectations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Launch Readiness', icon: Zap },
                { title: 'Production Ramp-ups', icon: Activity },
                { title: 'Quality & Process Control', icon: ShieldAlert },
                { title: 'Delivery Reliability', icon: CheckCircle2 },
                { title: 'Technical Gaps', icon: Wrench },
                { title: 'Capacity Constraints', icon: Users },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow">
                  <item.icon className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Delivery */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Solution Delivery Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "On-Site Supplier Assessment",
                  desc: "Immediate deployment to diagnose quality, delivery, capacity, or compliance risks and identify root-cause issues slowing performance."
                },
                {
                  title: "Stabilization & Corrective Actions",
                  desc: "Hands-on support to contain disruptions, restore output, and guide suppliers through structured recovery plans and process improvements."
                },
                {
                  title: "Performance & Compliance Oversight",
                  desc: "Daily dashboarding, KPI tracking, and accountability structures to ensure suppliers meet service levels, SLAs, and customer expectations."
                },
                {
                  title: "Capacity & Workflow Optimization",
                  desc: "Evaluation of throughput, staffing, material flow, and technical processes to strengthen reliability and eliminate bottlenecks."
                },
                {
                  title: "Supplier Readiness & Risk Mitigation",
                  desc: "Launch preparation, surge-demand support, and readiness reviews to reduce operational risk and protect continuity."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-500 transition-colors group">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Seasoned Experts */}
          <div className="bg-gray-900 text-white rounded-3xl p-12 md:p-16 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Seasoned Experts with Deep OEM and Tier I Experience</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Each consultant on our 5-person Deployment Team brings 20+ years of supplier management, operational excellence, and supply chain quality experience.
                </p>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Collectively, the team has supported critical supplier initiatives for BMW, Kia, Hyundai, Daimler Truck, and other global manufacturers.
                </p>
                <ul className="space-y-4">
                  {[
                    "Deploy within days",
                    "Diagnose root-cause issues quickly",
                    "Deliver structured reporting back to OEM stakeholders",
                    "Stabilize operations and reduce risk",
                    "Guide corrective action and long-term prevention",
                    "Improve supplier maturity and capability"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team Collaboration" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold mb-1">20+</div>
                  <div className="text-sm font-medium tracking-wider uppercase">Years Avg Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Protect the Line. Protect Your Relationships.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Whether it's a temporary spike in demand, a launch ramp-up, or a critical supplier failure, our team knows how to protect the line—and your customer relationships.
            </p>
            <Link
              to="/automotive"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xl"
            >
              Need More Automotive Support? <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
