import { Search } from 'lucide-react'

function Header() {
    return (
        <div className="flex justify-between w-full h-[10vh]">
            <div className="w-[40%] h-[40%] rounded-full relative border border-gray-300 flex items-center pl-10 pr-3 bg-gray-200">
                <Search size={18} className="text-black absolute left-3"/>
                <input
                    placeholder="Search"
                    className="pl-3 w-full h-full text-[1.5rem] bg-transparent outline-none border-none"
                />
            </div>
        </div>
    );
}

export default Header;