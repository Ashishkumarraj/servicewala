import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Alex Robinson",
        title: "CEO, TechFlow",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "ServiceWala transformed our outdated website into a lead generation machine. The design is stunning and the performance is incredible."
    },
    {
        name: "Sarah Jenkins",
        title: "Marketing Director, Bloom",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        content: "The team was professional, responsive, and delivered ahead of schedule. Highly recommend for anyone looking for top-tier development."
    },
    {
        name: "Michael Chen",
        title: "Founder, StartupX",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        content: "Their attention to detail is unmatched. They perfectly captured our brand identity and built a scalable platform for our users."
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-2"
                    >
                        Testimonials
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        What Clients Say
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 relative group hover:border-purple-500/30 transition-all shadow-lg hover:shadow-purple-500/10"
                        >
                            <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                            </div>

                            <div className="flex items-center gap-1 text-yellow-500 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">"{t.content}"</p>

                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-purple-500/50" />
                                <div>
                                    <h4 className="text-white font-bold text-sm bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{t.name}</h4>
                                    <p className="text-gray-500 text-xs">{t.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
