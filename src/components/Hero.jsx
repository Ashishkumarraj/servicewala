import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Code, Layout, Smartphone, CheckCircle } from 'lucide-react';

/**
 * Hero Section Component
 * 
 * This is the first section users see when visiting the website.
 * It contains the main value proposition, call-to-action buttons,
 * and a decorative 3D visual element.
 * 
 * Key Features:
 * - Animated background blobs for visual interest
 * - Split layout (Text left, Visual right)
 * - 3D Card effect simulating a code environment or dashboard
 */
const Hero = () => {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center bg-slate-50 dark:bg-slate-950 overflow-hidden pt-20 transition-colors duration-300">
            {/* Background Blobs - Decorative animated elements behind the content */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-20 animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                            <span className="text-sm font-medium text-purple-600 dark:text-purple-300">Available for new projects</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-purple-400 dark:via-pink-500 dark:to-red-500">Digital Engines</span> That Scale.
                        </h1>

                        <p className="text-slate-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            From high-performance Web Apps to stunning UI/UX Design, we transform your vision into a powerful digital reality.
                            <span className="block mt-2 text-slate-500 dark:text-gray-500 text-sm font-mono">React • Next.js • Tailwind • Node.js</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2 group"
                            >
                                Get Free Consultation
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="portfolio"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="px-8 py-4 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-white/80 dark:hover:bg-white/10 transition-all cursor-pointer backdrop-blur-sm flex items-center justify-center"
                            >
                                View Our Work
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-slate-500 dark:text-gray-400 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-purple-600 dark:text-purple-400" /> <span>Fast Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-pink-600 dark:text-pink-400" /> <span>Scalable Code</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-indigo-600 dark:text-indigo-400" /> <span>24/7 Support</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center relative perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, rotateY: 10, rotateX: 10 }}
                        animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative"
                    >
                        {/* 3D Glass Card Stack */}
                        <div className="relative w-[320px] h-[400px] md:w-[450px] md:h-[500px]">
                            {/* Back Card */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-900/40 rounded-3xl transform translate-x-4 translate-y-4 border border-white/20 dark:border-white/5 backdrop-blur-sm -z-10"></div>

                            {/* Main Card */}
                            <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-2xl dark:shadow-none overflow-hidden flex flex-col transition-colors duration-300">
                                {/* Header */}
                                <div className="px-6 py-4 border-b border-slate-200 dark:border-white/5 flex items-center justify-between bg-slate-50/50 dark:bg-white/5">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-gray-500 font-mono">ServiceWala.tsx</div>
                                </div>

                                {/* Code Content */}
                                <div className="p-6 font-mono text-sm space-y-4 flex-1">
                                    <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400 mb-4">
                                        <Code size={16} /> <span>Code Quality: <span className="text-green-600 dark:text-green-400">High</span></span>
                                    </div>

                                    <div className="space-y-2 font-bold dark:font-normal">
                                        <div className="flex">
                                            <span className="text-purple-600 dark:text-purple-400 mr-2">const</span>
                                            <span className="text-blue-600 dark:text-blue-400">Services</span>
                                            <span className="text-slate-900 dark:text-white mx-2">=</span>
                                            <span className="text-yellow-600 dark:text-yellow-300">['Web', 'App', 'Startups']</span>;
                                        </div>
                                        <div className="flex">
                                            <span className="text-purple-600 dark:text-purple-400 mr-2">async function</span>
                                            <span className="text-blue-600 dark:text-blue-400">BuildSuccess</span>() {'{'}
                                        </div>
                                        <div className="pl-6 text-slate-500 dark:text-gray-400">
                                            await <span className="text-pink-600 dark:text-pink-400">deploy</span>(<span className="text-yellow-600 dark:text-yellow-300">"YourIdea"</span>);
                                        </div>
                                        <div className="pl-6">
                                            return <span className="text-green-600 dark:text-green-400">Success</span>;
                                        </div>
                                        <div className="text-slate-900 dark:text-white">{'}'}</div>
                                    </div>

                                    {/* Visual Elements inside card */}
                                    <div className="mt-8 grid grid-cols-2 gap-4">
                                        <div className="bg-slate-100 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors group cursor-default">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                                                <Layout size={20} className="text-white" />
                                            </div>
                                            <div className="text-xs text-slate-500 dark:text-gray-400">Modern UI/UX</div>
                                            <div className="text-slate-800 dark:text-white font-bold text-sm">Pixel Perfect</div>
                                        </div>

                                        <div className="bg-slate-100 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors group cursor-default">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                                                <Smartphone size={20} className="text-white" />
                                            </div>
                                            <div className="text-xs text-slate-500 dark:text-gray-400">Response</div>
                                            <div className="text-slate-800 dark:text-white font-bold text-sm">Mobile First</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Status Bar */}
                                <div className="bg-slate-100 dark:bg-slate-950 px-6 py-3 border-t border-slate-200 dark:border-white/5 flex justify-between items-center text-xs text-slate-500 dark:text-gray-500">
                                    <span>Ready to Deploy</span>
                                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Online</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
