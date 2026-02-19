import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
// import emailjs from '@emailjs/browser';

/**
 * Contact Section Component
 * 
 * Provides multiple ways for users to get in touch.
 * Features a fixed floating WhatsApp button and a grid of contact options (Email, Phone, Address).
 */
const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            {/* Background Glow - Ambient light effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/40 dark:bg-purple-600/20 rounded-full filter blur-[120px] opacity-30 pointer-events-none"></div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:scale-110 animate-bounce flex items-center justify-center"
                title="Chat on WhatsApp"
            >
                <MessageCircle size={28} fill="white" className="stroke-none" />
            </a>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Let's Build Something <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-500">Amazing Together.</span></h3>
                    <p className="text-slate-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        Ready to start your project? Reach out to us directly via email, phone, or visit our office. We respond within 24 hours.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {/* Email */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center shadow-lg dark:shadow-none">
                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 mb-6 shadow-lg shadow-purple-500/10">
                                <Mail size={28} />
                            </div>
                            <p className="text-sm text-slate-500 dark:text-gray-500 mb-2 font-medium">Email Us</p>
                            <a href="mailto:ashishsahani@gmail.com" className="font-semibold text-slate-900 dark:text-white text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">ashishsahani@gmail.com</a>
                        </div>

                        {/* Phone */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-pink-500/30 dark:hover:border-pink-500/30 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center shadow-lg dark:shadow-none">
                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 mb-6 shadow-lg shadow-pink-500/10">
                                <Phone size={28} />
                            </div>
                            <p className="text-sm text-slate-500 dark:text-gray-500 mb-2 font-medium">Call Us</p>
                            <a href="tel:+918112643260" className="font-semibold text-slate-900 dark:text-white text-lg group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">+91 8112643260</a>
                        </div>

                        {/* Visit */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center shadow-lg dark:shadow-none">
                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 mb-6 shadow-lg shadow-indigo-500/10">
                                <MapPin size={28} />
                            </div>
                            <p className="text-sm text-slate-500 dark:text-gray-500 mb-2 font-medium">Visit Us</p>
                            <p className="font-semibold text-slate-900 dark:text-white text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Ansal Golf Link 1, Pari Chowk Metro Station, Greater Noida, Uttar Pradesh 201310</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;
