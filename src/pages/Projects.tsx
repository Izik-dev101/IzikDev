import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
  {
    title: "DailyBlog",
    desc: "From IzikDev DigitalHomeStudio — a living digital neighborhood where words find their home. DailyBlog is a community of thinkers and storytellers, built with PHP and MySQL, designed to bring structure and warmth to online expression.",
    img: "/images/blog.jpeg",
    comingSoon: true,
    link: "http://localhost/dailyblog/index.php",
  },
  {
    title: "The Solitary",
    desc: "From IzikDev HeavenStudio — a four-bedroom bungalow that stands in quiet dialogue with space and silence. The Solitary breathes calm minimalism, where concrete, glass, and light weave together a rhythm of contemplation.",
    img: "/images/solitary.jpg",
    link: "https://drive.google.com/file/d/1QQggD3dDsYyVJxAO9L2Va44SyOPsqZEa/view?usp=drive_link",
  },
  {
    title: "Oblong",
    desc: "From IzikDev HeavenStudio — a three-bedroom bungalow drawn in harmony and restraint. Oblong listens to the cadence of daily life, balancing intimacy and openness in forms that invite serenity and belonging.",
    img: "/images/rector.jpg",
    link: "https://drive.google.com/file/d/1T9d_5sjDsvLbhgE-QzPtOqUtQWyJpfA4/view?usp=drive_link",
  },
  {
    title: "The Grace",
    desc: "From IzikDev HeavenStudio — a five-bedroom bungalow shaped by light and balance. The Grace carries an air of quiet confidence, where structure meets stillness, and each room unfolds like a chapter of calm intention.",
    img: "/images/grace.jpg",
    link: "https://drive.google.com/file/d/1wSE-AEm1ak3xf5ZcdFb_KkR3K27yapSL/view?usp=drive_link",
  },
  {
    title: "Lewis UI",
    desc: "From IzikDev MordenUiStudio — a front-end design system built for elegance in restraint. Lewis UI brings rhythm to digital surfaces, crafting clarity through proportion, and serenity through space.",
    img: "/images/lotor.jpg",
    link: "https://drive.google.com/file/d/1OQK7TGmYiFgzj0ubD0G40G5GgfLuFBKr/view?usp=drive_link",
  },
  {
    title: "Focus UI",
    desc: "From IzikDev MordenUiStudio — created for minds that move with purpose. Focus UI helps you stay in control and centered, a toolkit of calm precision — where minimalist design meets meaningful direction.",
    img: "/images/focus2.PNG",
    link: "https://drive.google.com/file/d/1AcxhyeIyY2BbMb6I7qDjBj6IfPQi5JyQ/view?usp=drive_link",
  },
];

return (
  <>
  {/* Projects Section */}
  <motion.section
    className="max-w-6xl mx-auto mt-24 px-6 md:px-12 text-center md:text-left"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
  {/* Section Header */}
  <motion.div
    className="text-center mb-14"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
      IzikDev Studios
    </h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
      A collection of crafted works — born from code, form, and imagination.  
      Each studio is a world of its own: digital, architectural, and aesthetic —  
      all bound by structure, grace, and direction.
    </p>

  {/* Underline Animation */}
  <motion.div
      className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: "6rem" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  </motion.div>

  {/* Projects Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
    {projects.map((project, i) => (
      <motion.a
        key={i}
        href={!project.comingSoon ? project.link : undefined}
        target={project.comingSoon ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="block bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-500 hover:-translate-y-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: i * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: project.comingSoon ? 1.0 : 1.02 }}
      >
        {/* Project Image */}
        <div className="h-56 w-full overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-blue-400">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {project.desc}
          </p>

          {project.comingSoon ? (
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-500 italic font-medium inline-flex items-center"
            >
              🚧 Coming Soon
            </motion.span>
          ) : (
            <span className="text-blue-500 hover:text-blue-400 font-medium inline-flex items-center">
              View Project →
            </span>
          )}
        </div>
      </motion.a>
    ))}
  </div>
</motion.section>

  {/* Visit the Studios Section */}
  <motion.section
    className="mt-32 text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
      Visit the Studios
    </h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
      Step into the spaces where ideas are shaped —  
      each studio a world of its own.  
      Walk through the architecture of thought, design, and creation.
    </p>

  {/* Studios Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
  {[
  {
    name: "HeavenStudio",
    tagline: "Where architecture listens to silence.",
    color: "from-blue-400 via-indigo-500 to-cyan-500",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.25)]",
    link: "https://drive.google.com/drive/folders/17T7AHbLBpGqzjmU57NBCBo7x-6NuCfyk?usp=drive_link",
  },
  {
    name: "DigitalHomeStudio",
    tagline: "Where code builds living spaces online.",
    color: "from-pink-400 via-fuchsia-500 to-purple-600",
    glow: "shadow-[0_0_40px_rgba(236,72,153,0.25)]",
    link: "https://drive.google.com/drive/folders/11_6kOnI45XEBM6XNt-NcAkq5CNyHLLZp?usp=drive_link",
  },
  {
    name: "MordenUiStudio",
    tagline: "Where simplicity finds its modern rhythm.",
    color: "from-teal-400 via-cyan-500 to-blue-400",
    glow: "shadow-[0_0_40px_rgba(45,212,191,0.25)]",
    link: "https://drive.google.com/drive/folders/1j7ARmJcUlblYQDOh335mSMSuhsqB4Cbl?usp=drive_link",
  },
  ].map((studio, i) => (
  <motion.a
    key={i}
    href={studio.link}
    target="_blank"
    rel="noopener noreferrer"
    className={`relative block p-10 rounded-2xl border border-gray-700 bg-gray-800/50 overflow-hidden transition-all duration-700 group ${studio.glow}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: i * 0.15 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03, y: -4 }}
  >
  {/* Aurora Glow Animation Layer */}
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${studio.color} opacity-20 blur-2xl`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    ></motion.div>

  {/* Floating Motion */}
  <motion.div
    className="absolute inset-0"
    animate={{ y: [0, -4, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />

    {/* Card Content */}
    <div className="relative z-10">
      <h3 className="text-2xl font-semibold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-500">
        {studio.name}
      </h3>
      <p className="text-gray-400 text-sm italic leading-relaxed">
        {studio.tagline}
      </p>
    </div>

    {/* Subtle Border Light */}
    <div
      className={`absolute inset-0 rounded-2xl border border-transparent group-hover:border-[1px] group-hover:border-blue-500/40 transition-all duration-500`}
    ></div>
  </motion.a>
  ))}
  </div>
</motion.section>
</>
  );
}