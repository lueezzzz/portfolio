import { useEffect, useState } from "react";
import Navlinks from "./Navlinks";
import useToggle from "@/hooks/useToggle";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, ,setIsOpen] = useToggle();
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    const handleThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const Icon = theme === "dark" ? <Sun /> : <Moon />;
    const Burger = isOpen ? <X /> : <Menu />;

    return (
        <>
            <nav
                className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                    isScrolled ? "shadow-sm backdrop-blur-sm" : "bg-transparent"
                }`}
            >
                <div className="mx-auto max-w-6xl px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-bold hover:opacity-70 transition ease-in"><a href="#hero">R I A N</a></div>
                        <div className="hidden items-center space-x-8 md:flex">
                            <Navlinks
                                parentClass="flex"
                                childClass="mr-6 inline-block hover:opacity-70 transition cursor-pointer"
                                icon={Icon}
                                onToggleTheme={handleThemeToggle}
                            />
                        </div>
                        <div className="flex items-center space-x-2 md:hidden">
                            <button
                                onClick={handleThemeToggle}
                                type="button"
                                className="cursor-pointer text-black transition hover:opacity-70 dark:text-white"
                            >
                                {Icon}
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="cursor-pointer text-black transition hover:opacity-70 dark:text-white"
                            >
                                {Burger}
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="mt-4 border-t md:hidden dark:border-gray-700">
                            <Navlinks
                                parentClass="flex flex-col space-y-4 pt-4"
                                childClass="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-left dark:text-gray-300 dark:hover:text-white"
                            />
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
