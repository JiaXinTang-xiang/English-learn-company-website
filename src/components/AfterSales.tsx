import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    title: 'Warranty Service',
    description: 'All TF SSD products come with a 3-year warranty from the date of purchase. During the warranty period, we provide free repair or replacement for hardware failures caused by product quality issues.',
    details: [
      'Warranty Period: 3 Years',
      'Coverage: Non-man-made hardware failures',
      'Service: Free repair or replacement',
      'Response Time: Within 24 hours'
    ],
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
    ),
    title: 'Return & Exchange Policy',
    description: 'Within 7 days of receiving the product, if there are quality issues or the product does not match the description, you can apply for a no-reason return or exchange. We will cover the shipping costs.',
    details: [
      'Return Period: 7 Days',
      'Conditions: Product undamaged, packaging intact',
      'Shipping: Covered by us for quality issues',
      'Refund: Within 3 business days after receiving the return'
    ],
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    ),
    title: 'Technical Support',
    description: 'We provide professional technical support services to help users solve various technical problems encountered during product use. Support is available via phone, email, and online chat.',
    details: [
      'Service Hours: 24/7',
      'Support Channels: Phone/Email/Online Chat',
      'Response Time: Within 2 hours on business days',
      'Remote Assistance: Available'
    ],
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ),
    title: 'Repair Service',
    description: 'For products outside the warranty period, we provide professional paid repair services. Repair costs are transparent and reasonable, and the repair process is fully traceable to ensure user rights.',
    details: [
      'Scope: Hardware failure repair',
      'Cost: Quote before repair',
      'Turnaround: 3-5 business days for general failures',
      'Guarantee: 90-day warranty after repair'
    ],
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
      </svg>
    ),
    title: 'Customer Consultation',
    description: 'We have a dedicated customer consultation team providing comprehensive consulting services including product selection advice, usage guidance, and troubleshooting.',
    details: [
      'Channels: Phone/Online/Email',
      'Service Hours: Mon-Fri 9:00-18:00',
      'Content: Product selection/Usage guidance',
      'Feedback: Post-consultation satisfaction survey'
    ],
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
      </svg>
    ),
    title: 'Complaint Handling',
    description: 'We highly value every user\'s feedback and have established a comprehensive complaint handling mechanism to ensure user issues are resolved promptly and effectively.',
    details: [
      'Channels: Hotline/Online/Email',
      'Response Time: Within 24 hours',
      'Follow-up: Dedicated staff throughout',
      'Satisfaction: Follow-up survey after resolution'
    ],
    gradient: 'from-purple-500 to-pink-500'
  }
]

export default function AfterSales() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="after-sales" className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 backdrop-blur-md border border-indigo-500/20 mb-6">
            <span className="text-indigo-400 text-sm font-medium">After-sales Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-animated mb-4">
            After-sales Service
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are committed to providing professional, timely, and thoughtful after-sales service for every customer
          </p>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={50 + index * 30}>
              <div
                className="relative group cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

                {/* Card with 3D effect */}
                <div className="relative bg-[#111118] rounded-xl p-6 border border-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-500 h-full transform group-hover:-translate-y-2 group-hover:rotate-x-1">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-indigo-500/20 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-indigo-500/30`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                    {service.title}
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Details - Expandable */}
                  <div className={`overflow-hidden transition-all duration-500 ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-4 border-t border-indigo-500/10">
                      <ul className="space-y-3">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-3 text-sm">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`} />
                            <span className="text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom glow line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Contact Information */}
        <ScrollAnimation delay={800}>
          <div className="mt-20 relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20" />

            <div className="relative bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-8 sm:p-10 border border-indigo-500/20">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Contact Us
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  If you have any questions or need assistance, please don't hesitate to contact our customer service team
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { value: '400-666-6666', label: 'Hotline', icon: '📞' },
                    { value: 'support@tfssd.com', label: 'Email', icon: '✉️' },
                    { value: '24/7', label: 'Service Hours', icon: '🕐' }
                  ].map((contact, index) => (
                    <div key={index} className="group text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-indigo-500/10 hover:border-indigo-500/30">
                      <div className="text-4xl mb-3">{contact.icon}</div>
                      <div className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                        {contact.value}
                      </div>
                      <div className="text-gray-400 text-sm">{contact.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
