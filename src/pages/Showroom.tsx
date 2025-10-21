import { motion } from "framer-motion";

export default function Showroom() {
  const images = [
    { src: "/public/images/izik.png", caption: "Izik — Developing digital spaces + physical skylight." },
    { src: "/public/images/dante.PNG", caption: "Xampp — The home of my project databases" },
    { src: "/images/solitary.jpg", caption: "The Solitary — A home shaped by silence." },
    { src: "/images/grace.jpg", caption: "The Grace — Balance in light and proportion." },
    { src: "/images/hanks.PNG", caption: "Echoes of the night." },
    { src: "/images/focus2.PNG", caption: "Focus UI — Calm precision in code." },
  ];

  return (
    <motion.section
      className="relative max-w-6xl mx-auto mt-24 px-6 md:px-12 text-gray-300 leading-relaxed"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
          The Showroom
        </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                More than a gallery — this is a living archive of moments and creations.  
                Here I gather images from the worlds I build and the ones I inhabit:  
                glimpses of events, quiet studies of form and light, and works that speak of craft and time.  
                A place where architecture meets experience, and memory becomes design.
            </p>

        {/* Underline Animation */}
        <motion.div
          className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Image Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.8 },
          },
        }}
        viewport={{ once: true }}
      >
        {images.map((item, i) => (
          <motion.div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-700"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center p-4">
              <p className="text-sm text-gray-200 italic text-center">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}