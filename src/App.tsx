import Header from "./components/layout/Header"
import Navbar from "./components/layout/Navbar"
import Desayunos from "./sections/Desayunos"
import Comidas from "./sections/Comidas"
import Bebidas from "./sections/Bebidas"
import Infantil from "./sections/Infantil"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Desayunos />
      <Comidas />
      <Bebidas />
      <Infantil />
      <Footer />
    </>
  )
}

export default App