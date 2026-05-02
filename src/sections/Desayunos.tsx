import { motion } from "framer-motion"
import { menu } from "../data/menu"
import FoodCard from "../components/ui/FoodCard"
import { Coffee } from "lucide-react"

export default function Desayunos() {
  return (
    <section id="desayunos" className="py-10 px-6 bg-gray-100">
      
      <h2 
        className="flex items-center justify-center gap-3 text-4xl font-bold mb-8"
        style={{ color: "#7B3306" }}
      >
        
        {/* Icono izquierdo */}
        <motion.div
          animate={{ 
            x: [0, -3, 3, -3, 0],
            rotate: [0, -5, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <Coffee className="text-[#00A63E]" size={40} />
        </motion.div>

        Desayunos

        {/* Icono derecho */}
        <motion.div
          animate={{ 
            x: [0, -3, 3, -3, 0],
            rotate: [0, -5, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <Coffee className="text-[#00A63E]" size={40} />
        </motion.div>

      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {menu.desayunos.map((item) => (
          <FoodCard key={item.id} {...item} />
        ))}
      </div>

    </section>
  )
}