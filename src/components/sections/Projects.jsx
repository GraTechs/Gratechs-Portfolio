export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex justify-center items-center py-20">
                {/* <RevealOnScroll> */}
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-black bg-gradient-to-r from-blue-500 to-cyan-300  text-transparent bg-clip-text">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:bg-blue-500/5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] text-start gap-6 hover:-translate-y-1 transition">
                        <h3 className="font-bold mb-2">Project Grit</h3>
                        <p className="text-gray-400 mb-4">This is a Project I created with the help of my team. Unfortunately, it's current not available</p>
                        <div>
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex mt-4 justify-between items-center">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:bg-blue-500/5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] text-start gap-6 hover:-translate-y-1 transition">
                        <h3 className="font-bold mb-2">GoodLife</h3>
                        <p className="text-gray-400 mb-4">This is a Support Organization / Real Estate I Created</p>
                        <div>
                            {["React", "Node.js", "Firestore", "EmailJS"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex mt-4 justify-between items-center">
                            <a href="https://goodlife-887.pages.dev/" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:bg-blue-500/5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] text-start gap-6 hover:-translate-y-1 transition">
                        <h3 className="font-bold mb-2">True Glory Ministry INT'L</h3>
                        <p className="text-gray-400 mb-4">This is a Church Website That I am currently working on</p>
                        <div>
                            {["React", "Node.js", "Firestore", "EmailJS"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex mt-4 justify-between items-center">
                            <a href="https://tgm-6rc.pages.dev/" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
                        </div>
                    </div>

                </div>
            </div>
            {/* </RevealOnScroll> */}
        </section>
    )
}