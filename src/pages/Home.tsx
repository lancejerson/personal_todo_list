// Home.tsx
import { useState } from 'react'
import Header from '../components/Header.tsx'
import NewList from '../components/NewList.tsx' // Make sure this path is correct
import { Plus } from 'lucide-react'

function Home() {
    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="w-full h-full">
            <Header />
            {/* Conditionally render NewList to occupy full screen when active */}
            {isActive && (
                <div className="fixed inset-0 z-50">
                    <NewList isActive={isActive} setIsActive={setIsActive} />
                </div>
            )}
            <div className="w-full h-[90%] flex">
                <div className="w-[30%] h-full flex border border-black overflow-hidden auto-y-scroll">
                    <div className="flex items-center w-full justify-between h-[10%] px-[15px]">
                        <h1 className="text-[3rem] text-black ">To-Do</h1>
                        <button onClick={() => {handleButtonClick()}} className="w-[35%] h-[50%] border bg-gray-400 group transform hover:bg-gray-300 border-gray-200 flex rounded-xl items-center justify-center flex-row gap-3">
                            <Plus
                                size={18}
                                className="text-black transition group-hover:rotate-90 duration-300"
                            />
                            <h2 className="text-[2rem] md:text-[1.5rem] text-gray-700">New Task</h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;