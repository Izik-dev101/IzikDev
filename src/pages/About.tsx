import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <motion.section
      className="relative max-w-4xl mx-auto mt-24 px-6 md:px-10 text-gray-300 leading-relaxed overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          A <span className="text-blue-400">web developer</span> and{" "}
          <span className="text-purple-400">architectural designer</span> crafting spaces —  
          digital and physical — where design meets code, and tradition meets the future.  
          My work rests on balance: clarity over excess, calm over chaos,  
          and a structure that quietly breathes.
        </p>

        <motion.div
          className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Image & CV Buttons */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/showroom"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-500 text-center min-w-[140px] sm:min-w-[160px]"
          >
            Gallery
          </Link>

          <a
            href="/public/cv/Ikeogu Zikora.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-500 text-center min-w-[140px]"
          >
            Download CV
          </a>
        </motion.div>

      {/* Philosophy */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h3 className="text-2xl font-semibold text-blue-400 mb-6">
          My Way of Building
        </h3>
        <div className="space-y-3 text-gray-400 text-base">
          <p>I believe in designing with restraint — because calm has clarity.</p>
          <p>I treat every interface like architecture — structure before ornament.</p>
          <p>I honor timeless principles: proportion, rhythm, and balance — now written in code.</p>
        </div>
      </motion.div>

      {/* Studios Overview */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          {
            name: "DigitalHomeStudio",
            desc: "Where code builds living spaces online.",
            color: "from-purple-500 via-fuchsia-500 to-pink-400",
          },
          {
            name: "HeavenStudio",
            desc: "Where architecture listens to silence.",
            color: "from-sky-400 via-blue-500 to-indigo-600",
          },
          {
            name: "MordenUiStudio",
            desc: "Where simplicity finds its modern rhythm.",
            color: "from-teal-400 via-cyan-500 to-blue-400",
          },
        ].map((studio, i) => (
          <motion.div
            key={i}
            className="relative p-8 rounded-2xl border border-gray-700 bg-gray-800/40 text-center overflow-hidden backdrop-blur-sm group transition-all duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${studio.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700`}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-blue-400 mb-2">{studio.name}</h4>
              <p className="text-gray-400 text-sm italic">{studio.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Reflection */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-400 italic">
          Away from the screen, I study the geometry of light and listen to spaces —  
          because both architecture and code begin in stillness.
        </p>

        <p className="text-gray-400 italic mt-4">
          Architecture and code are not merely professions — they’re philosophies.  
          I live within them, learning their silence, shaping their rhythm.
        </p>

        <p className="text-gray-400 italic mt-6">
          To build — whether in stone or syntax — is to honor what endures.  
          I believe beauty lies not in invention alone, but in the quiet continuity between past and present.
        </p>
      </motion.div>

      {/* Contact */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-gray-400 mb-6">
          If you’d like to build something meaningful — digital or physical — I’d be glad to hear from you.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-500"
        >
          Let’s Connect
        </Link>
      </motion.div>
    </motion.section>
  );
}
