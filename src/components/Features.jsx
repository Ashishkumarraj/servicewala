import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Heart, Monitor } from 'lucide-react';

/**
 * Key Features Data
 * 
 * Defines the core benefits displayed in the Features section.
 */
const features = [
    {
        icon: <Zap size={32} />,
        title: "Lightning Fast Delivery",
        desc: "We prioritize efficiency without compromising quality, ensuring your project launches on time."
    },
    {
        icon: <Shield size={32} />,
        title: "Secure & Scalable",
        desc: "Built with enterprise-grade security and architecture that grows with your business."
    },
    {
        icon: <Heart size={32} />,
        title: "Dedicated Support",
        desc: "We don't just leave you after launch. Our team is available 24/7 for maintenance and updates."
    },
    {
        icon: <Monitor size={32} />,
        title: "Modern UI/UX",
        desc: "Award-winning design standards that ensure high user engagement and conversion rates."
    },
];

/**
 * Features Section Component
 * 
 * Highlights the main reasons to choose the service.
 * Uses a grid layout to display key benefits with icons.
 */
const Features = () => {
    return (
        <section id="benefits" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-950/50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose <span className="text-purple-600 dark:text-purple-400">ServiceWala?</span></h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">We combine technical expertise with creative innovation to deliver exceptional results.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-purple-500/30 hover:shadow-lg dark:hover:bg-white/10 transition-all group shadow-md dark:shadow-none"
                        >
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Features;
