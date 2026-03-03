import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TrendingUp, FileText, DollarSign, Settings, Truck, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Tier1Suppliers() {
  return (
    <div className="bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-amber-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            alt="Business Strategy"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-amber-900 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Tier I Supply Chain Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto font-light"
          >
            Helping Small Businesses Win, Grow, and Sustain Fortune 1000 Clients!
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helping Emerging Suppliers Perform With the Strength, Structure, and Confidence of a Tier I Partner</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Serving Fortune 1000 clients takes more than delivering a solid product or service—it requires the discipline, visibility, and professionalism of a fully mature Tier I supplier. Many small and mid-sized businesses already have the talent and capability. What they're missing is the enterprise-level structure Fortune 1000 procurement teams expect.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              PSM Workforce steps in as a hands-on partner to help growing suppliers close this gap. We work beside owners, leadership teams, and operational managers to refine pricing strategies, strengthen cost management discipline, and build financial clarity that protects margins under intense competitive pressure.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {/* Proposal */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <FileText className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proposal & Client Pitch Deck Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fortune 1000 procurement teams expect clear messaging, strong value articulation, and structured presentations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Professional, compelling pitch decks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">RFx and proposal responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Capability statements</span>
                </li>
              </ul>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <DollarSign className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing & Cost Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Small suppliers often struggle to balance competitive pricing with healthy margins. We provide:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Cost modeling and pricing strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Margin protection methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Benchmarking against market intelligence</span>
                </li>
              </ul>
            </div>

            {/* Finance */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <TrendingUp className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Managerial Finance & Tax Strategy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This ensures your business is financially prepared for expansion, audits, and long-term contracts.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Cash flow planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Budgeting and forecasting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">COGS analysis</span>
                </li>
              </ul>
            </div>

            {/* Sourcing */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <Settings className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Sourcing & Contract Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We help supplier organizations navigate the same structured sourcing practices Fortune 1000 clients use.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Supplier scouting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Scope-of-work interpretation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Contract review & negotiation</span>
                </li>
              </ul>
            </div>

            {/* Supply Chain */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <Truck className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inbound & Outbound Supply Chain Planning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Growing suppliers often need help building scalable, reliable supply chain processes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Demand and inventory planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Inbound logistics optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Lead-time and capacity analysis</span>
                </li>
              </ul>
            </div>

            {/* Tech */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <Cpu className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom AI-Based Technology & Automation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Small suppliers can now compete using enterprise-grade technology—without enterprise-level budgets.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">AI forecasting and demand models</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Automated dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-gray-700 text-sm">Document and workflow automation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-amber-900 text-white rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern-3" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern-3)" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to operate like the kind of Tier I supplier Fortune 1000 clients want to award, expand, and retain?</h2>
              <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-10">
                In short, PSM Workforce gives small and mid-sized suppliers the tools, insight, and execution strength to operate like a Tier I partner.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-amber-900 bg-white hover:bg-amber-50 transition-colors shadow-xl"
              >
                Email Us Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
