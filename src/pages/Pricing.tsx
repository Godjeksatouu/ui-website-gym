import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Basic',
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      monthly: 49,
      yearly: 490,
      popular: false,
      features: [
        'Access to gym floor',
        'Basic equipment usage',
        'Locker room access',
        'Mobile app access',
        'Basic workout tracking',
        '24/7 gym access'
      ],
      notIncluded: [
        'Group fitness classes',
        'Personal training',
        'Nutrition consultation',
        'Premium equipment'
      ]
    },
    {
      name: 'Premium',
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      monthly: 89,
      yearly: 890,
      popular: true,
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Premium equipment access',
        'Guest passes (2/month)',
        'Nutrition tracking',
        'Recovery zone access',
        'Towel service',
        'Priority booking'
      ],
      notIncluded: [
        'Personal training sessions',
        'Nutrition consultation'
      ]
    },
    {
      name: 'Elite',
      icon: <Crown className="h-8 w-8 text-green-400" />,
      monthly: 149,
      yearly: 1490,
      popular: false,
      features: [
        'Everything in Premium',
        '4 personal training sessions/month',
        'Monthly nutrition consultation',
        'Unlimited guest passes',
        'Exclusive VIP area',
        'Massage therapy discount',
        'Supplement discount',
        'Priority support'
      ],
      notIncluded: []
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              Membership Plans
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan to achieve your fitness goals. All plans include access to our world-class facilities.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === 'yearly' ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              >
                <div className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                }`}></div>
              </motion.button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save 17%
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                className={`relative bg-gray-900 rounded-xl p-8 ${
                  plan.popular 
                    ? 'ring-2 ring-yellow-400 transform scale-105' 
                    : 'hover:bg-gray-800'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-green-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.monthly : plan.yearly}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-gray-400 text-sm">
                      ${Math.round(plan.yearly / 12)}/month when paid annually
                    </p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <X className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:from-yellow-500 hover:to-green-500'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">All Plans Include</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every membership comes with these essential benefits
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: 'No Commitment',
                description: 'Cancel anytime with 30-day notice',
                icon: '🔓'
              },
              {
                title: 'Free Assessment',
                description: 'Complimentary fitness evaluation',
                icon: '📊'
              },
              {
                title: 'Mobile App',
                description: 'Track workouts and book classes',
                icon: '📱'
              },
              {
                title: 'Clean Facilities',
                description: 'Sanitized equipment and spaces',
                icon: '🧼'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-black/50 rounded-lg hover:bg-black/70 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                question: 'Can I freeze my membership?',
                answer: 'Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel.'
              },
              {
                question: 'Are there any initiation fees?',
                answer: 'No initiation fees! Just your first month\'s membership fee to get started.'
              },
              {
                question: 'Can I bring guests?',
                answer: 'Premium and Elite members receive guest passes. Basic members can purchase day passes for guests.'
              },
              {
                question: 'What if I want to upgrade my plan?',
                answer: 'You can upgrade your plan at any time. The difference will be prorated for the current billing cycle.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-900 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-green-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 text-black"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-black/80 mb-8"
          >
            Join thousands of members who have transformed their lives at gym
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300"
          >
            START YOUR FREE TRIAL
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;