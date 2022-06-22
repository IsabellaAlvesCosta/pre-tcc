import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Adm from './pages/adm'
import MenuAdm from './pages/menuadm'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/adm' element={<Adm/>} />
                <Route path='/menuadm' element={<MenuAdm/>} />
          
            </Routes>
        </BrowserRouter>
    )
}