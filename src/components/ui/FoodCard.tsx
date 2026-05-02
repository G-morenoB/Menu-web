import { motion } from "framer-motion"

type Props = {
  nombre: string
  precio: number
  descripcion: string
  imagen: string
}

export default function FoodCard({
  nombre,
  precio,
  descripcion,
  imagen
}: Props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 1 },
        show: { opacity: 1, y: 0, scale: 1 },
        hover: { scale: 1.05 }
      }}
      transition={{ duration: 0.4 }}
      whileHover="hover"
      className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group"
    >
      
      {/* Imagen */}
      <div className="overflow-hidden">
        <motion.img
          src={imagen}
          alt={nombre}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Contenido */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-[#7B3306]">
            {nombre}
          </h3>
          <span className="text-[#00B263] font-bold">
            ${precio.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-500 text-sm mt-2">
          {descripcion}
        </p>
      </div>

      {/* Línea animada */}
      <div className="relative h-1 bg-green-200 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-0 h-full bg-[#00B263]"
          initial={{ width: 0, x: "-50%" }}
          whileInView={{ width: "100%", x: "-50%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>

    </motion.div>
  )
}