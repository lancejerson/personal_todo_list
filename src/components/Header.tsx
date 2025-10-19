import { Search } from 'lucide-react'

function Header() {
    return (
        <div className="flex justify-between w-full h-[8vh] bg-gray-100 top-0 items-center z-50 content-center">
            <div className="w-[40%] h-[50%] rounded-full relative border border-gray-300 flex items-center pl-10 pr-3 bg-gray-200">
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