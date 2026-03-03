import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TalentDevelopment() {
  return (
    <div className="bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-teal-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
            alt="Training Session"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-teal-900 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Talent Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto font-light"
          >
            Cutting edge training and programs for industry professionals, designed by industry professionals!
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Workforce Development & Leadership Training</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              PSM Workforce delivers comprehensive professional development programs in Procurement, Supply Chain, Manufacturing, and Leadership Communication—blending strategy, analytics, and influence to strengthen organizational communication and performance.
            </p>
          </div>

          {/* Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {/* Competency Programs */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Procurement Competency & Certificate Programs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our 1 or 2-day facilitated learning experiences are available onsite, virtual instructor-led, or at one of our partner university campuses. Each program is developed by industry professionals in collaboration with your needs.
              </p>
              <h4 className="font-semibold text-gray-900 mb-4">Partnerships include:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">ISM Affiliates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Georgia Tech Center for Supply Chain & Logistics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">UNC Charlotte Continuing Education</span>
                </li>
              </ul>
            </div>

            {/* Power Sessions */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Off-the-Shelf Competency Based Power Sessions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Virtual 4-hour Deep Dives | Up to 40–50 Staff & Stakeholders per Cohort | Ideal for Accelerated Alignment
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Power Sessions provide concentrated, hands-on development for sourcing professionals and leadership teams. These sessions deliver immediate application of best practices while strengthening internal alignment, communication, and strategic execution.
              </p>
              <h4 className="font-semibold text-gray-900 mb-4">Featured Topics:</h4>
              <div className="flex flex-wrap gap-2">
                {["Category Cost Management", "Negotiations & Influence", "Contract Development", "Supplier Quality", "Scopes of Work", "AI in Sourcing"].map((topic, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* University Partnerships */}
          <div className="bg-gray-50 rounded-3xl p-12 md:p-16 mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">PSM University Certificate Program Partnerships</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                PSM Workforce has cultivated a strategic learning ecosystem that connects corporations, universities, former executives, and emerging talent to strengthen and accelerate procurement and supply chain capability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">UNC Charlotte PSM Professional Certificate Program</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In partnership with UNC Charlotte School of Professional Studies, PSM Workforce supports the Procurement & Supply Management Professional Certificate Program (PSO101)—an instructor-led, virtual program offered twice a year.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-gray-700">Develop holistic understanding of procurement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-gray-700">Analyze key income statement and balance sheet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-gray-700">Strengthen leadership communication</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Georgia Tech Institute for Supply Chain & Logistics — PSM Leadership Certificate</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In collaboration with the Georgia Tech Supply Chain & Logistics Institute, PSM Workforce co-develops the PSM Leadership Certificate—an advanced track for mid- to senior-level professionals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-gray-700">Strategic sourcing alignment with business objectives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-gray-700">Advanced negotiation and influence frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-gray-700">Supplier performance governance and risk management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Talent Placement */}
          <div className="bg-teal-900 text-white rounded-3xl p-12 md:p-16 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-teal-400" /> Talent Placement when you need it!
                </h2>
                <p className="text-teal-100 leading-relaxed mb-6 text-lg">
                  Tomorrow's supply chains need tomorrow's talent. Our Spring 2026 Internship & Co-op Placement Program connects companies with skilled students in procurement, logistics, and supply chain operations — ready to make an impact from day one.
                </p>
                <div className="space-y-6">
                  <div className="bg-teal-800 rounded-xl p-6">
                    <h4 className="font-bold text-xl mb-2">Spring Co-op Placement Program (Jan–May 2026)</h4>
                    <p className="text-teal-200">Connects students with companies seeking hands-on support. Co-op participants work full-time alongside professionals.</p>
                  </div>
                  <div className="bg-teal-800 rounded-xl p-6">
                    <h4 className="font-bold text-xl mb-2">Summer Internship Program (Jun–Aug 2026)</h4>
                    <p className="text-teal-200">High-impact opportunity to contribute to live projects across supply chain, procurement, and business operations.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students Working" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Let's build your next generation of supply chain leaders.</h2>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-xl"
            >
              Partner with PSM Workforce Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
