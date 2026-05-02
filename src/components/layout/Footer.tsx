import { MapPin, Clock} from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { motion } from 'framer-motion';

export default function Footer() {
    return (
                <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-green-800 to-green-900 text-white py-16 mt-16"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Dirección */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                <MapPin className="w-8 h-8 mb-3 text-green-300" />
                <h3 className="text-xl font-bold mb-2">Dirección</h3>
                <p className="text-green-100">Av. Principal 123</p>
                <p className="text-green-100">Centro, Ciudad</p>
                <p className="text-green-100">CP 12345</p>
              </motion.div>

              {/* Teléfono */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                <FaWhatsapp className="w-8 h-8 mb-3 text-green-300" />
                <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                <p className="text-green-100">(555) 123-4567</p>
                <p className="text-green-100">(555) 987-6543</p>
                <p className="text-green-100 text-sm mt-2">Entregas a domicilio</p>
              </motion.div>

              {/* Horarios */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                <Clock className="w-8 h-8 mb-3 text-green-300" />
                <h3 className="text-xl font-bold mb-2">Horarios</h3>
                <p className="text-green-100">Lunes a Viernes</p>
                <p className="text-green-100">8:00 AM - 9:00 PM</p>
                <p className="text-green-100 mt-2">Sábado y Domingo</p>
                <p className="text-green-100">9:00 AM - 10:00 PM</p>
              </motion.div>

              {/* Redes Sociales */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </motion.a>
                </div>
                <p className="text-green-100 mt-4">@Restaurante</p>
              </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12 pt-8 border-t border-green-700"
            >
              <p className="text-green-200">© 2026 Restaurant - Cocina Casera y Natural. Todos los derechos reservados.</p>
            </motion.div>
          </div>
        </motion.footer>
    )
}