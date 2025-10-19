import React from 'react';

interface Props{
    icon?: React.ReactNode;
    label?: string,
    arrow?: React.ReactNode;
}

function Menu({ icon, label, arrow }: Props) {
    return (
        <div className="min-w-full items-center flex justify-between group min-h-[30px] hover:bg-zinc-200 px-[30px]">
            <div className="w-[70%] h-full flex flex-row gap-3 items-center">
                { icon && <div className=" text-black">{ icon }</div> }
                { label && <span className="text-[1.5rem] text-black md:text-[1.5rem]">{ label }</span> }
            </div>
            { arrow && <div className="text-black group-hover:translate-x-2 duration-300 items-center">{ arrow }</div> }
        </div>
    );
}

export default Menu;