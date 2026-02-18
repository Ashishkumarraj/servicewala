import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Link } from 'react-scroll';

const plans = [
    {
        name: 'Basic',
        price: '$499',
        description: 'Perfect for small businesses and startups looking to establish an online presence.',
        features: [
            'Responsive Website (5 Pages)',
            'Basic SEO Optimization',
            'Contact Form Integration',
            'Mobile Friendly Design',
            '1 Month Support',
            'Standard Performance'
        ],
        notIncluded: ['CMS Integration', 'E-commerce Functionality'],
        cta: 'Get Started',
        popular: false,
        delay: 0
    },
    {
        name: 'Standard',
        price: '$999',
        description: 'Our most popular plan for growing businesses that need a dynamic and powerful website.',
        features: [
            'Everything in Basic',
            'CMS Integration (WordPress/Sanity)',
            'Advanced SEO & Analytics',
            'Social Media Integration',
            '3 Months Support',
            'Fast Performance Optimization'
        ],
        notIncluded: ['E-commerce Functionality'],
        cta: 'Choose Standard',
        popular: true,
        delay: 0.1
    },
    {
        name: 'Premium',
        price: '$1999',
        description: 'Full-scale custom development for enterprises requiring top-tier performance and features.',
        features: [
            'Everything in Standard',
            'Custom Web Application',
            'E-commerce & Payment Gateway',
            'User Authentication System',
            '6 Months Priority Support',
            'Ultimate Speed & Security'
        ],
        notIncluded: [],
        cta: 'Go Premium',
        popular: false,
        delay: 0.2
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-slate-950 shadow-inner"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-2"
                    >
                        Pricing Plans
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Transparent Pricing
                    </motion.h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Choose the perfect plan that fits your business needs. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: plan.delay }}
                            whileHover={{ y: -10 }}
                            className={`relative rounded-3xl p-8 border backdrop-blur-sm transition-all duration-300 flex flex-col h-full ${plan.popular
                                    ? 'bg-gradient-to-b from-purple-900/20 to-slate-900/80 border-purple-500 shadow-2xl shadow-purple-900/20 scale-105 md:scale-110 z-10'
                                    : 'bg-slate-900/50 border-white/10 hover:border-white/20 hover:bg-slate-900/80'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h4 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-300'}`}>{plan.name}</h4>
                                <div className="flex items-end gap-1 mb-4">
                                    <span className="text-4xl font-bold text-white">
                                        {plan.price !== 'Custom' && <span className="text-lg text-gray-500 font-normal mr-1">Starting from</span>}
                                        {plan.price}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="flex-grow mb-8 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <div className={`mt-0.5 rounded-full p-0.5 ${plan.popular ? 'bg-purple-500/20 text-purple-400' : 'bg-white/10 text-gray-400'}`}>
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map((feature, i) => (
                                    <div key={i + 10} className="flex items-start gap-3 text-sm text-gray-600">
                                        <div className="mt-0.5 rounded-full p-0.5 bg-transparent text-gray-700">
                                            <X size={14} strokeWidth={3} />
                                        </div>
                                        <span className="line-through">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className={`w-full py-4 rounded-xl font-bold text-center cursor-pointer transition-all ${plan.popular
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/40'
                                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
