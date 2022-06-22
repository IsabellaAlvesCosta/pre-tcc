import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Adm from './pages/adm'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Adm />} />
          
            </Routes>
        </BrowserRouter>
    )
}