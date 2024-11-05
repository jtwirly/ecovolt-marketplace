import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Seamless Energy Trading`,
      description: `Buy and sell clean energy with your neighbors effortlessly through our smart grid technology.`,
      icon: <i className="las la-bolt"></i>,
    },
    {
      heading: `Maximize Your Savings`,
      description: `Turn your excess energy into extra income while reducing your overall energy costs.`,
      icon: <i className="las la-piggy-bank"></i>,
    },
    {
      heading: `Real-Time Monitoring`,
      description: `Track your energy production, consumption, and transactions in real-time with our user-friendly dashboard.`,
      icon: <i className="las la-chart-line"></i>,
    },
    {
      heading: `Secure Blockchain Transactions`,
      description: `Enjoy peace of mind with our transparent and tamper-proof blockchain-based energy trading system.`,
      icon: <i className="las la-lock"></i>,
    },
    {
      heading: `Community Impact`,
      description: `Contribute to a greener future by supporting local clean energy initiatives and reducing carbon emissions.`,
      icon: <i className="las la-leaf"></i>,
    },
    {
      heading: `Automated Smart Contracts`,
      description: `Set your energy preferences once and let our smart contracts handle the rest, saving you time and effort.`,
      icon: <i className="las la-file-contract"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Solar Panel Owner`,
      content: `Since joining the clean energy marketplace, I've been able to offset my entire electricity bill and even earn extra income. It's incredible to see my excess energy benefiting my neighbors!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Eco-Conscious Consumer`,
      content: `As someone without the ability to install solar panels, this platform has allowed me to support local clean energy and reduce my carbon footprint. It's a win-win for everyone involved.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Small Business Owner`,
      content: `The clean energy marketplace has significantly reduced our operating costs. We're now powered by 100% renewable energy from our community, which aligns perfectly with our sustainability goals.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Thompson`,
      designation: `Retired Engineer`,
      content: `I was skeptical at first, but the ease of use and the financial benefits have made me a believer. It's satisfying to know my excess energy is helping power my neighborhood.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Patel`,
      designation: `Homeowner`,
      content: `The real-time monitoring feature is fantastic. I can see exactly how much energy I'm producing, using, and selling. It's made me much more aware of my energy consumption habits.`,
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      name: `Tom Wilson`,
      designation: `Community Leader`,
      content: `This platform has brought our neighborhood together in ways we never expected. We're not just sharing energy; we're building a more sustainable and connected community.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `How It Works`,
      link: `#how-it-works`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for households just starting with clean energy`,
      monthly: 9,
      yearly: 99,
      features: [
        `Up to 5kWh daily trading limit`,
        `Basic energy analytics`,
        `Community forum access`,
      ],
    },
    {
      title: `Pro`,
      description: `Ideal for active energy producers and consumers`,
      monthly: 19,
      yearly: 209,
      features: [
        `Up to 20kWh daily trading limit`,
        `Advanced energy analytics`,
        `Priority customer support`,
        `Smart contract customization`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Tailored solutions for businesses and large-scale producers`,
      monthly: 49,
      yearly: 539,
      features: [
        `Unlimited daily trading`,
        `Real-time API access`,
        `Dedicated account manager`,
        `Custom integration options`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the clean energy marketplace work?`,
      answer: `Our platform connects local energy producers with consumers, allowing for direct peer-to-peer trading of clean energy. Producers can sell their excess energy, while consumers can purchase locally generated renewable energy at competitive prices.`,
    },
    {
      question: `Is it safe to trade energy on your platform?`,
      answer: `Absolutely. We use blockchain technology to ensure all transactions are secure, transparent, and tamper-proof. Our smart contracts automate the trading process, minimizing risks and errors.`,
    },
    {
      question: `Do I need special equipment to participate?`,
      answer: `If you're a producer, you'll need a smart meter compatible with our system. For consumers, no special equipment is required. We'll guide you through the setup process to ensure a smooth experience.`,
    },
    {
      question: `How much can I save or earn through this marketplace?`,
      answer: `Savings and earnings vary depending on your energy production, consumption, and local market conditions. On average, producers can offset their entire electricity bill and potentially earn extra income, while consumers can save up to 20% on their energy costs.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Sign Up and Connect`,
      description: `Create your account and connect your smart meter or energy monitoring system to our platform.`,
    },
    {
      heading: `Set Your Preferences`,
      description: `Specify your energy production capacity, consumption needs, and trading preferences.`,
    },
    {
      heading: `Start Trading`,
      description: `Our smart contracts automatically match buyers and sellers, facilitating seamless energy exchanges.`,
    },
    {
      heading: `Monitor and Optimize`,
      description: `Track your energy flows and transactions in real-time, adjusting your strategy to maximize benefits.`,
    },
  ]

  const painPoints = [
    {
      emoji: `💸`,
      title: `High energy bills eating into your savings`,
    },
    {
      emoji: `🏭`,
      title: `Reliance on fossil fuels increasing your carbon footprint`,
    },
    {
      emoji: `🔌`,
      title: `Wasted clean energy due to lack of storage options`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Empower Your Community with Clean Energy`}
        subtitle={`Join the revolution in peer-to-peer energy trading. Sell your excess clean energy or buy from your neighbors, creating a sustainable and profitable local energy ecosystem.`}
        buttonText={`Get Started`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/vytu1Q-ecovolt-bQdf`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy energy traders`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Featured on`} />
      <LandingPainPoints
        title={`The Hidden Costs of Traditional Energy: 75% of Local Clean Energy Potential Wasted`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Revolutionize Your Energy Consumption in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Unlock the Power of Community Energy Trading`}
        subtitle={`Discover how our platform transforms the way you produce, consume, and trade clean energy.`}
        features={features}
      />
      <LandingTestimonials
        title={`Real People, Real Energy Savings`}
        subtitle={`See how our community members are benefiting from the clean energy marketplace.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Choose Your Path to Energy Independence`}
        subtitle={`Select the plan that best fits your energy trading needs and start your journey towards a greener, more profitable future.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Learn more about how our clean energy marketplace can work for you.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Join the Clean Energy Revolution Today`}
        subtitle={`Start trading energy, saving money, and building a sustainable future for your community.`}
        buttonText={`Get Started Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
