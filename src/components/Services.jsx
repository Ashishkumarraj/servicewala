import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Cpu, Globe, Rocket } from 'lucide-react';

const services = [
    {
        icon: <Code size={30} />,
        title: 'Web Development',
        desc: 'High-performance websites built with React, Next.js, and modern technologies.',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: <Smartphone size={30} />,
        title: 'App Development',
        desc: 'Cross-platform mobile apps using React Native and Flutter for iOS & Android.',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: <Palette size={30} />,
        title: 'UI/UX Design',
        desc: 'Stunning user interfaces and seamless experiences designed in Figma.',
        color: 'from-orange-500 to-red-500',
    },
    {
        icon: <Cpu size={30} />,
        title: 'Custom Software',
        desc: 'Tailored software solutions to automate and optimize your business processes.',
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: <Globe size={30} />,
        title: 'SEO & Performance',
        desc: 'Ranking your website higher with technical SEO and speed optimization.',
        color: 'from-yellow-500 to-orange-500',
    },
    {
        icon: <Rocket size={30} />,
        title: 'Digital Marketing',
        desc: 'Growth strategies to boost your brand presence and customer engagement.',
        color: 'from-indigo-500 to-purple-500',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-2"
                    >
                        What We Do
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Our Services
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg"
                    >
                        We offer a complete range of digital solutions to help your business grow.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm shadow-xl"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}></div>

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{service.title}</h4>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
