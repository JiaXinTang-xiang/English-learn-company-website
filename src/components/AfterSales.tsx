const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    title: '保修服务',
    description: '所有TF固态硬盘产品享受3年质保服务，自购买之日起计算。在保修期内，因产品质量问题导致的故障，我们将提供免费维修或更换服务。',
    details: [
      '质保期限：3年',
      '覆盖范围：非人为损坏的硬件故障',
      '服务方式：免费维修或更换',
      '响应时间：24小时内响应'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
    ),
    title: '退换货政策',
    description: '自收到产品之日起7天内，如产品存在质量问题或与描述不符，可申请无理由退换货。我们将承担退换货产生的运费。',
    details: [
      '退换期限：7天',
      '退换条件：产品未损坏、包装完整',
      '运费承担：质量问题由我方承担',
      '退款时间：收到退货后3个工作日内'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    ),
    title: '技术支持',
    description: '我们提供专业的技术支持服务，帮助用户解决产品使用过程中遇到的各种技术问题。支持电话、邮件、在线客服等多种沟通方式。',
    details: [
      '服务时间：7×24小时',
      '支持方式：电话/邮件/在线客服',
      '响应时间：工作日2小时内',
      '远程协助：提供远程技术支持'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ),
    title: '维修服务',
    description: '对于保修期外的产品，我们提供专业的有偿维修服务。维修费用透明合理，维修过程全程可追溯，确保用户权益。',
    details: [
      '维修范围：硬件故障修复',
      '费用说明：维修前报价确认',
      '维修周期：一般故障3-5个工作日',
      '质量保证：维修后享受90天保修'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
      </svg>
    ),
    title: '客户咨询',
    description: '我们设有专业的客户咨询团队，为用户提供产品选购建议、使用指导、故障排查等全方位咨询服务。',
    details: [
      '咨询方式：电话/在线/邮件',
      '服务时间：工作日 9:00-18:00',
      '咨询内容：产品选购/使用指导',
      '反馈机制：咨询后满意度调查'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
      </svg>
    ),
    title: '投诉处理',
    description: '我们高度重视每一位用户的反馈，建立了完善的投诉处理机制。确保用户的问题能够得到及时、有效的解决。',
    details: [
      '投诉渠道：400热线/在线/邮件',
      '处理时限：24小时内响应',
      '跟进机制：专人负责全程跟进',
      '满意度回访：处理完成后回访'
    ]
  }
]

export default function AfterSales() {
  return (
    <section id="after-sales" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            售后服务
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            我们承诺为每一位用户提供专业、及时、周到的售后服务
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-400">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 sm:p-10">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              联系我们
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              如有任何问题或需要帮助，请随时联系我们的客服团队
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">400-XXX-XXXX</div>
                <div className="text-gray-400">客服热线</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">support@tfssd.com</div>
                <div className="text-gray-400">电子邮箱</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">7×24小时</div>
                <div className="text-gray-400">服务时间</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
