import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Sun, Moon } from "lucide-react";

/**
 * Navigation Bar Component
 * 
 * This component provides the main navigation for the website.
 * It is responsive, adapting to both desktop and mobile layouts.
 * 
 * Key Features:
 * - Sticky navigation with scroll-aware background blur
 * - Dark/Light mode toggle with local storage persistence
 * - Mobile menu with hamburger toggle
 * - Smooth scrolling to page sections
 */
const Navbar = () => {
    // State to manage mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

    // State to track if the page has been scrolled (for navbar styling)
    const [scrolled, setScrolled] = useState(false);

    // Theme state management (light vs dark mode)
    // Initializes from localStorage or defaults to 'dark'
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    // Effect to handle scroll events for navbar appearance changes
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-white/10"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link to="home" smooth={true} duration={500} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-500">
                            ServiceWala
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {['Home', 'Services', 'Portfolio', 'Benefits', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="text-slate-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all"
                                >
                                    {item}
                                </Link>
                            ))}

                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-white/20 transition-all"
                                aria-label="Toggle Theme"
                            >
                                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden items-center gap-4">
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-white/20 transition-all"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 shadow-xl border-t border-slate-200 dark:border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['Home', 'Services', 'Portfolio', 'Benefits', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                            >
                                {item}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
