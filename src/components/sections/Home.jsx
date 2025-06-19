import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            {/* <RevealOnScroll> */}
            <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-5xl p-2 font-bold mt-10 mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Hi, I'm Gracious Technologies</h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">IT Support Engineer with hands-on experience in Python automation, Bash scripting, web development, and cloud computing. Proven contributor to major government tech projects, delivering efficient and scalable IT solutions.</p>
                <div className="flex items-center justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 px-6 py-3 rounded font-medium relative
                transition overflow-hidden hover:-translate-y-0.5  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View Projects</a>
                    <a href="#contact" className="border border-blue-500/50 px-6 py-3 rounded font-medium relative
                transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/50">Contact Me</a>
                </div>
            </div>
            {/* </RevealOnScroll> */}
        </section>
    );

};