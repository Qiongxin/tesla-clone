import React from 'react'
import { Routes, Route} from "react-router-dom"
import Order from './components/Order'
import Homepage from './components/Homepage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="tesla-clone" element={<Homepage />} />
        <Route path="tesla-clone/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App
