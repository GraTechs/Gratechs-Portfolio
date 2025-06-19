export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center"
    >
        {/* <RevealOnScroll> */}
      <div className="px-4 w-150">
        <h1 className="text-3xl mb-8 font-black bg-gradient-to-r from-blue-500 to-cyan-300  text-transparent bg-clip-text">
          Get In Touch
        </h1>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
              placeholder="Name..."
            />
          </div>
          <div className="relative ">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="relative ">
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
              placeholder="Your Message..."
            />
          </div>
          <button type="sumit" className="w-full bg-blue-500 py-3 px-6 text-white rounded font-medium hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition">Send Message</button>
        </form>
      </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};
