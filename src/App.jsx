import Hero from '../public/Components/Hero'
import Nav from '../public/Components/Nav'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/hero" element={<Hero />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
