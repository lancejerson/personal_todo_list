import { Link } from "react-router-dom"

interface Props{
    isOpen?: boolean
}

function OpenListButton({ isOpen }: Props) {
    return (
        <div className={`w-full h-full transition-all duration-300  ${
            isOpen
                ? 'flex items-center justify-center opacity-100'
                : 'flex items-center justify-center opacity-0 translate-y-full'
        }`}>
            <Link to='/itemlist' className="w-[130px] h-[45px] border-2 border-black rounded-full flex items-center transform-gpu justify-center transform group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full h-full items-center justify-center">
                    <h1 className="text-[1.5rem] text-black font-semibold">Open List</h1>
                </button>
            </Link>

        </div>
    );
}

export default OpenListButton;