"use client";
import React, { useState, useEffect, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);
    const [theme, setTheme] = useState("light");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [dropdownTop, setDropdownTop] = useState(0);
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const updateDropdownPosition = () => {
            if (navbarRef.current) {
                const navbarHeight = navbarRef.current.offsetHeight;
                setDropdownTop(navbarHeight + 24); // Add 24px for spacing
            }
        };

        // Update dropdown position on mount and window resize
        updateDropdownPosition();
        window.addEventListener("resize", updateDropdownPosition);

        return () => window.removeEventListener("resize", updateDropdownPosition);
    }, []);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <div className="relative z-[5000]">
                {/* Navbar */}
                <motion.div
                    ref={navbarRef}
                    className={cn(
                        "flex md:max-w-fit fixed md:top-6 top-0 space-x-10 inset-x-0 mx-auto md:rounded-full rounded-none shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-10 py-5 items-center justify-between bg-purple/10 backdrop-blur-lg",
                        className
                    )}
                >
                    <a href="#">
                        <img src="/dark-logo.png" className="dark:hidden flex" width={25} />
                        <img src="/light-logo.png" className="hidden dark:flex" width={25} />
                    </a>

                    <div className="hidden md:flex space-x-10">
                        {navItems.map((navItem, idx) => (
                            <Link
                                key={`link=${idx}`}
                                href={navItem.link}
                                className={cn(
                                    "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                                )}
                            >
                                <span className="block sm:hidden">{navItem.icon}</span>
                                <span className="text-sm !cursor-pointer">{navItem.name}</span>
                            </Link>
                        ))}
                    </div>

                    <div onClick={toggleTheme} className="hidden md:flex">
                        {theme === "light" ? (
                            <FaMoon className="text-purple hover:text-purple/80 cursor-pointer" />
                        ) : (
                            <FaSun className="text-purple hover:text-purple/80 cursor-pointer" />
                        )}
                    </div>

                    <div className="md:hidden flex items-center space-x-5">
                        <div onClick={toggleTheme}>
                            {theme === "light" ? (
                                <FaMoon className="text-purple hover:text-purple/80 cursor-pointer" />
                            ) : (
                                <FaSun className="text-purple hover:text-purple/80 cursor-pointer" />
                            )}
                        </div>

                        <motion.div
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="cursor-pointer"
                        >
                            <FaBars className="text-neutral-600 dark:text-neutral-50" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Mobile Menu */}
                <motion.div
                    className={` top-0 left-0 bg-white dark:bg-slate-950 backdrop-blur-lg p-5 w-screen h-screen fixed ${
                        isMobileMenuOpen ? "block" : "hidden"
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -10 }}
                    exit={{ opacity: 0, y: -10 }}
                >
                    {/* Close Icon */}
                    <div className="absolute top-8 right-8">
                        <div
                            className="p-2 rounded-full cursor-pointer bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 hover:bg-gray-300"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <FaTimes className="text-purple" />
                        </div>
                    </div>

                    {/* Mobile Menu Items */}
                    <div className="flex flex-col items-center space-y-6 mt-16">
                            <Link
                                href="#"
                                className="text-neutral-600 dark:text-neutral-50 text-lg hover:text-neutral-500 dark:hover:text-neutral-300"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                Home
                            </Link>
                        {navItems.map((navItem, idx) => (
                            <Link
                                key={`link=${idx}`}
                                href={navItem.link}
                                className="text-neutral-600 dark:text-neutral-50 text-lg hover:text-neutral-500 dark:hover:text-neutral-300"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {navItem.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>



            </div>
        </AnimatePresence>
    );
};
