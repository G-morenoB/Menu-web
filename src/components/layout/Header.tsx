import { motion } from "framer-motion"
import { Utensils } from "lucide-react"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/90 backdrop-blur-md shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center">

          {/* LOGO */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="mb-4"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-[#00B263] rounded-full flex items-center justify-center shadow-xl">
              <Utensils className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* TITULO */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B3306] via-green-800 to-[#7B3306]"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Obdulio
          </motion.h1>

          {/* SUBTITULO */}
          <p className="text-gray-600 mt-2 text-lg">
            Cocina Casera y Natural
          </p>

        </div>
      </div>
    </motion.header>
  )
}