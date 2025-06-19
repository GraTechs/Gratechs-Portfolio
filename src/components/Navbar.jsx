import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() =>  {
        document.body.style.overflow = menuOpen ? "hidden" : "";
},[menuOpen])

    return (
        <nav className="fixed top-0 z-40 w-full bg-[rgba(0,0,0,0.8)] backdrop-blur-lg border-b border-white/0">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between relative items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        Gra<span className="text-blue-500">Techs</span>
                    </a>
                    <div className="w-7 h-5 relative z-40 cursor-pointer md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>&#9776;</div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}; 