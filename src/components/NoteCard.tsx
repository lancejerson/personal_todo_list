import { useState } from "react";
import OpenListButton from "./OpenListButton";

interface Props{
    key: number
    item: string
}

function NoteCard({ key, item }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            key={key}
            className="h-full aspect-square border-2 group gap-3 border-gray-400 rounded-xl flex flex-col items-center justify-center duration-300 p-[5px]"
            onMouseEnter={() => setIsOpen(!isOpen)}
            onMouseLeave={() => setIsOpen(!isOpen) }
        >
            <div className="w-full h-full p-[5px] flex flex-col gap-3 group-hover:blur-sm">
                {item}
            </div>
            <OpenListButton isOpen={isOpen}/>
        </div>
    );
}

export default NoteCard;