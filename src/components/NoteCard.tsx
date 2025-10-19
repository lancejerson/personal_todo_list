interface Props{
    key: number
    item: string
}

function NoteCard({ key, item }: Props) {
    return (
        <div key={key} className="h-full aspect-square border-2 group border-gray-600 rounded-xl flex items-center justify-center duration-300">
            {item}
        </div>
    );
}

export default NoteCard;