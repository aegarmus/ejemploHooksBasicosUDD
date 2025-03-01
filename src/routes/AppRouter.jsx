import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { About } from "../pages/aboute/About"
import { Navbar } from "../components/Navbar/Navbar"
import { DigimonList } from "../pages/DiigmonList/DigimonList"



export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/digimons" element={<DigimonList />}/>
                {/* Agregar ruta NotFound*/}
            </Routes>
        </>
    )
}