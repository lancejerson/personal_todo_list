import { useState } from "react";
import { X } from 'lucide-react';
import ColorButton from "./ColorButton.tsx";
import { Link } from "react-router-dom";

function NewList( props: { isActive: boolean; setIsActive: (value: boolean) => void; } ) {
    const { isActive, setIsActive } = props;

    const [chosenColor, setChosenColor] = useState<string>('#ffffff');
    const closeModal = () => {
        setIsActive(!isActive);
    }

    const handleColor = (color:string) => {
        setChosenColor(color)
    }

    return (
        // Fix the template literal syntax
        <div className={`w-screen h-screen items-center justify-center flex ${isActive ? 'flex backdrop-blur-md' : 'hidden'} bg-opacity-50 fixed`}>
            <div className="w-[30%] h-[70%] items-center flex flex-col gap-6 border-3 border-black p-[15px] rounded-xl bg-white">
                <header className="w-full flex items-center justify-end">
                    <X onClick={closeModal}
                       size={18}
                       className="text-black hover:opacity-50 cursor-pointer"
                    />
                </header>
                <div className="w-full flex justify-center">
                    <h1 className="text-[2.5rem] text-black">
                        Create A New List
                    </h1>
                </div>
                <div className="w-full h-[20%] flex items-center justify-center flex-col gap-3">
                    <div
                        className="h-[50%] aspect-square rounded-full border border-gray-300"
                        style={{backgroundColor: chosenColor}}
                    >
                        {/*Profile Color*/}
                    </div>
                    <h2>List Color</h2>
                </div>
                <div className="w-[90%] h-[15%] flex justify-center items-center flex-col gap-1">
                    <h2 className="text-gray-300 text-[1.5rem]">Pick a Color</h2>
                    <div className="flex h-[50%] w-full justify-center items-center">
                        <ul className="w-[80%] h-[80%] flex items-center justify-between">
                            <ColorButton bg="#b8b8ff" onColorClick={handleColor}/>
                            <ColorButton bg="#ddbea9" onColorClick={handleColor}/>
                            <ColorButton bg="#1f7a8c" onColorClick={handleColor}/>
                            <ColorButton bg="#8fc0a9" onColorClick={handleColor}/>
                            <ColorButton bg="#efc7c2" onColorClick={handleColor}/>
                            <ColorButton bg="#f1faee" onColorClick={handleColor}/>
                            <ColorButton bg="#000000" onColorClick={handleColor}/>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-[40%] flex items-center flex-col gap-6 ">
                    <div className="flex justify-center w-full h-[20%]">
                        <input
                            placeholder="Enter your list title"
                            type="text"
                            className="w-[70%] h-full border-2 border-black px-[10px] text-[1.5rem] rounded-lg"
                        />
                    </div>
                    <div className="w-[70%] h-[20%] flex items-center justify-between">
                        <button className="w-[40%] h-full border-2 border-black text-[2rem] rounded-xl" onClick={closeModal}>
                            Cancel
                        </button>
                        <Link to='/newtodo' className="w-[40%] h-full border-2 border-black text-[2rem] flex rounded-xl items-center justify-center">
                            <button className="w-full h-full text-[2rem] rounded-xl flex text-center justify-center items-center">
                                Create
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewList;