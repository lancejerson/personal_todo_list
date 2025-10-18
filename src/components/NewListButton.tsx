import { Plus } from 'lucide-react';

interface Props{
    onclick?: () => void;
}

function NewListButton({ onclick }: Props) {
    return (
        <button className="h-[40%] aspect-square border-2 border-dotted group border-gray-600 rounded-xl flex items-center justify-center hover:border-purple-400" onClick={() => onclick?.()}>
            <div className="w-full h-[40%] flex justify-between items-center flex-col">
                <Plus className="group-hover:text-purple-400"/>
                <h2 className="text-[2.5rem] md:text-[2rem] text-gray-900 group-hover:text-purple-400">
                    New Task
                </h2>
            </div>
        </button>
    );
}

export default NewListButton;