import './styles/globals.css'
import NavBar from './components/NavBar.tsx'
import Home from './pages/Home.tsx'
import { Routes, Route } from 'react-router-dom'
import NewTodo from './pages/NewTodo.tsx'
import ItemList from "./pages/ItemList.tsx";

function App() {
    return (
    <div className="w-screen h-screen flex flex-row">
        <div className="flex h-full w-[20vw] justify-center">
            <NavBar />
        </div>
        <div className="w-[80vw] h-full justify-center bg-gray-100 px-[30px] py-[30px]">
            <Routes>
                <Route path="/newtodo" element={<NewTodo/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path='/itemlist' element={<ItemList/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default App
