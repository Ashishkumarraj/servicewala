import React from 'react';
import { MessageCircle, Send, Instagram, Linkedin, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

/**
 * Footer Component
 * 
 * Displays the website footer with navigation links, contact info, and social media.
 * Features a 4-column responsive layout and copyright information.
 */
const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
            {/* Abstract shapes */}
            <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] bg-purple-200/40 dark:bg-purple-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <Link to="home" smooth={true} duration={500} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-500 mb-4 inline-block cursor-pointer">
                            ServiceWala
                        </Link>
                        <p className="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                            We build digital experiences that scale. From startups to enterprises, we provide cutting-edge software solutions tailored to your needs.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 dark:hover:text-white transition-all shadow-sm dark:shadow-none">
                                <MessageCircle size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all shadow-sm dark:shadow-none">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition-all shadow-sm dark:shadow-none">
                                <Send size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all shadow-sm dark:shadow-none">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Web Development</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">App Development</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Custom Software</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Digital Marketing</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Portfolio</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-slate-600 dark:text-gray-400">
                            <li>123 Tech Street, Silicon Valley, CA 94000</li>
                            <li>hello@servicewala.com</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-white/5 pt-8 text-center text-slate-500 dark:text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} ServiceWala. All rights reserved.</p>
                    <p className="flex items-center gap-1 mt-2 md:mt-0">Made with <Heart size={14} className="text-red-500 fill-red-500" /> by ServiceWala Team</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
