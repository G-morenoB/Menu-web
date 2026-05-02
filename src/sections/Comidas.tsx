import { motion } from "framer-motion"
import { menu } from "../data/menu"
import FoodCard from "../components/ui/FoodCard"
import { Utensils } from 'lucide-react';


export default function Comidas() {
  return (
    <section className="py-10 px-6 bg-gray-100">
      
      <h2 
          className="flex items-center justify-center gap-3 text-4xl font-bold mb-8"
          style={{ color: "#7B3306" }}
        >
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
          <Utensils color="#00A63E" size={40} />
        </motion.div>

          Comidas

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

        <Utensils color="#00A63E" size={40} />
        </motion.div>
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {menu.comidas.map((item) => (
          <FoodCard key={item.id} {...item} />
        ))}
      </div>

    </section>
  )
}