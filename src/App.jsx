import { useState } from 'react'
import './App.css'
import Navbar from './Components/AdminPage/NavbarForAdmin/Navbar.jsx'
import Sidebar from "./Components/AdminPage/SidebarForAdmin/Sidebar2.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <Navbar/>

    </>
  )
}

export default App
