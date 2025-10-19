// Home.tsx
import { useState } from 'react'
import Header from '../components/Header.tsx'
import NewList from '../components/NewList.tsx' // Make sure this path is correct
import NewListButton from "../components/NewListButton.tsx"
import NoteCard from '../components/NoteCard.tsx'

function Home() {
    const handleButtonClick = () => {
        setIsActive(!isActive);
    }

    const sampleList = [
        'Hello',
        'Hello World',
        'How are you?',
        'Orcatti',
        'Goodluck sa midterm',
        'asdashdkjasdh',
        'asdhasdjkhsadjkash',
        'vkljbkxlcjb',
        'fdshgffksfjdhg'
    ]

    const [isActive, setIsActive] = useState(false);
    const [listBasket, setListBasket] = useState<Array<any>>([...sampleList]); // Currently unused

    return (
        <div className="w-full h-full">
            <Header />
            {/* Conditionally render NewList to occupy full screen when active */}
            {isActive && (
                <div className="fixed inset-0 z-50">
                    <NewList isActive={isActive} setIsActive={setIsActive} />
                </div>
            )}
            <div className="w-full h-[90%] flex flex-col justify-center items-center top-[8vh] overflow-auto">
                <div className="flex w-full justify-start h-[4%]">
                    <h1 className="text-4xl">Your List</h1>
                </div>
                <div className="w-full h-[96%] pt-[15px] gap-[15px] grid grid-cols-4 gap-[30px]">
                    { listBasket.map((item,index) => (
                        <NoteCard key={index} item={item}/>
                    ))}
                    {<NewListButton onclick={handleButtonClick}/>}
                </div>
            </div>
        </div>
    );
}

export default Home;