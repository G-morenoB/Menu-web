import { Baby, Coffee, GlassWater, Utensils } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const categorias = [
  { nombre: "Desayunos", icon: Coffee, id: "desayunos" },
  { nombre: "Comidas", icon: Utensils, id: "comidas" },
  { nombre: "Bebidas", icon: GlassWater, id: "bebidas" },
  { nombre: "Infantil", icon: Baby, id: "infantil" }
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("desayunos")

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      const offset = 140 // ajusta según tu header
      const y = element.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({
        top: y,
        behavior: "smooth"
      })
    }
  }

  // detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200

      categorias.forEach((cat) => {
        const el = document.getElementById(cat.id)
        if (!el) return

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(cat.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 py-3 shadow-lg backdrop-blur-sm sticky top-0 z-50"
      >
      <div className="flex justify-center gap-3 flex-wrap px-4">

        {categorias.map((cat) => {
          const Icon = cat.icon
          const isActive = activeSection === cat.id

          return (
            <motion.button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-green-700 shadow-md"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium hidden sm:inline">
                {cat.nombre}
              </span>
            </motion.button>
          )
        })}

      </div>
    </motion.nav>
  )
}