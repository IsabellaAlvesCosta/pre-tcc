import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Adm from './pages/adm'
import MenuAdm from './pages/menuadm'
import Usuario from './pages/ususolicita'
import Visu from './pages/visuconsultas'


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/adm' element={<Adm/>} />
                <Route path='/menuadm' element={<MenuAdm/>} />
                <Route path='/ususolicita' element={<Usuario/>} />
                <Route path='/visuconsultas' element={<Visu/>} />
                
            </Routes>
        </BrowserRouter>
    )
}