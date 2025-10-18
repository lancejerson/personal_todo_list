import { ChevronRight, Clock, Check, Loader, House } from "lucide-react";
import Menu from './Menu.tsx'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="flex h-ful w-full flex-col gap-15 py-[30px] bg-white">
            <div className="w-full flex justify-between h-[5%] items-center px-[15px]">
                <h1 className="text-[3rem] text-black font-semibold">TO-DO</h1>
            </div>
            <div className="w-full h-[20%] flex flex-col gap-2 p-0 m-0">
                <Link to='/'>
                    <Menu icon={ <House size={18}/> } label="Home" arrow={ <ChevronRight size={18}/> }/>
                </Link>
                <Menu icon={ <Clock size={18}/> } label="To-do" arrow={ <ChevronRight size={18}/> }/>
                <Menu icon={ <Loader size={18}/>  } label="In Progress" arrow={ <ChevronRight size={18}/> }/>
                <Menu icon={ <Check size={18}/> } label="Completed" arrow={ <ChevronRight size={18}/> }/>
            </div>
        </nav>
    );
}

export default NavBar;