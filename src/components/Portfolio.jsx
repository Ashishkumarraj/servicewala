import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import fintechImg from '../assets/fin.jpg';
import ecommerceImg from '../assets/ecomm.jpg';
import healthcareImg from '../assets/health.jpg';

/**
 * Project Data Array
 * 
 * Contains details for the portfolio projects.
 * - title: Project name
 * - category: Type of project (Web, Mobile, etc.)
 * - image: Imported image asset
 * - description: Project summary
 * - tech: Array of technologies used
 */
const projects = [
    {
        title: 'FinTech Dashboard',
        category: 'Web Application',
        image: fintechImg,
        description: 'A comprehensive dashboard for financial analytics with real-time data visualization and reporting tools.',
        details: 'Our FinTech Dashboard is designed to provide real-time insights into financial markets. It aggregates data from multiple sources and presents it in an intuitive interface, allowing traders and analysts to make informed decisions quickly. The system is built for high performance and reliability.',
        features: [
            'Real-time stock tracking and alerts',
            'Interactive, customizable charts',
            'Automated financial reporting',
            'Granular user role management'
        ],
        tech: ['React', 'D3.js', 'Node.js']
    },
    {
        title: 'E-Commerce Platform',
        category: 'Mobile App',
        image: ecommerceImg,
        description: 'Full-stack e-commerce solution with secure payment gateway integration and inventory management.',
        details: 'This E-Commerce Platform offers a seamless shopping experience for users while providing powerful management tools for store owners. It supports multiple payment gateways and features a robust inventory management system that syncs across channels.',
        features: [
            'Secure multi-gateway checkout',
            'Real-time inventory synchronization',
            'Verified customer reviews system',
            'Advanced discount code engine'
        ],
        tech: ['Next.js', 'Stripe', 'MongoDB']
    },
    {
        title: 'HealthCare Portal',
        category: 'Custom Software',
        image: healthcareImg,
        description: 'Secure patient management system helping clinics streamline their daily operations and appointments.',
        details: 'The HealthCare Portal connects patients with doctors, simplifying appointment scheduling and medical record management. It ensures strict data privacy and compliance with healthcare regulations, offering peace of mind to both providers and patients.',
        features: [
            'Online appointment booking',
            'Telemedicine video integration',
            'Encrypted medical records',
            'Digital prescription management'
        ],
        tech: ['TypeScript', 'PostgreSQL', 'Docker']
    }
];

/**
 * Portfolio Section Component
 * 
 * Showcases recent projects in a responsive grid.
 * Features hover effects to reveal more details and a consistent card layout.
 */
const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase text-sm mb-2"
                    >
                        Our Work
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Recent Projects
                    </motion.h3>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Explore some of our latest success stories and see how we help businesses thrive.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all duration-300 group shadow-lg"
                        >
                            <div className="relative aspect-video overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-white/90 dark:bg-black/50 backdrop-blur-md text-slate-900 dark:text-white text-xs rounded-full border border-slate-200 dark:border-white/10 font-medium">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{project.title}</h4>
                                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs text-slate-500 dark:text-gray-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">#{t}</span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-lg flex items-center justify-center gap-2 transition-colors font-medium">
                                    View Case Study <ExternalLink size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-transparent border border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-colors font-medium">
                        View All Projects
                    </button>
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 max-h-[90vh] flex flex-col"
                        >
                            <div className="relative h-64 shrink-0">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full font-medium shadow-lg">
                                        {selectedProject.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 overflow-y-auto">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    {selectedProject.title}
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">Overview</h4>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {selectedProject.details}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">Key Features</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {selectedProject.features?.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">Technology Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium"> # {t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
