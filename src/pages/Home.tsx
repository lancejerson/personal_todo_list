// Home.tsx
import { useState } from 'react'
import Header from '../components/Header.tsx'
import NewList from '../components/NewList.tsx' // Make sure this path is correct
import NewListButton from "../components/NewListButton.tsx"

function Home() {
    const [isActive, setIsActive] = useState(false);
    const [listBasket, setListBasket] = useState<Array<any>>([NewListButton]); // Currently unused

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
            <div className="w-full h-[90%] flex flex-col">
                <div className="flex w-[20%] justify-start h-[4%]">
                    <h1 className="text-4xl">Your List</h1>
                </div>
                <div className="w-full h-[96%] flex pt-[15px] flex-row gap-4 flex-wrap">
                    { listBasket.map((item) => (
                        <div className="h-[40%] aspect-square border-2 border-dotted group border-gray-600 rounded-xl flex items-center justify-center duration-300">
                            {item}
                        </div>
                    ))}
                    <NewListButton onclick={handleButtonClick}/>
                </div>
            </div>
        </div>
    );
}

export default Home;