export const About = () => {

    const frontendSkills = [
        "React", "Vue", "TypeScript", "TailwindCSS", "Svelte"
    ]

    const backendSkills = [
        "Node.js", "Python", "AWS", "MongoDB", "GraphQL"
    ]

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20">
                {/* <RevealOnScroll> */}
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl mb-8 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">Hi, I'm Gracious, an IT Support Engineer with a strong foundation in Python automation, Bash scripting, web development, and cloud computing.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech) => (
                                    <span
                                        // key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech) => (
                                    <span
                                        // key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Experience</h3>
                            <p className="text-gray-300 mb-6">I've been part of large-scale government technology projects, where I applied practical IT solutions to real-world challenges. My experience spans across system support, scripting, infrastructure automation, and deploying tools that enhance productivity and performance. With a blend of formal training, certifications, and field experience, I focus on delivering reliable, secure, and scalable IT solutions.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">My Mission</h3>
                            <p className="text-gray-300 mb-6">I'm passionate about technology that simplifies processes, and I'm always evolving—learning, building, and contributing where impact matters most. Whether it's automating workflows, solving technical issues, or supporting dynamic infrastructures, I bring a proactive, solutions-focused mindset to every task.</p>
                        </div>
                    </div>                
            </div>
        {/* </RevealOnScroll> */}
        </section>
    )
};