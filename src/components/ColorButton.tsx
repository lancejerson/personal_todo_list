interface Props{
    bg?: string;
    onColorClick?: (color:string) => void;
}

function ColorButton({ bg, onColorClick }: Props) {

    return (
        <li className="h-full aspect-square rounded-full border-2 border-black">
            <button
                className={`w-full h-full rounded-full`}
                style={{ backgroundColor: bg }}
                onClick={() => onColorClick?.(bg as string)}
            >
            </button>
        </li>
    );
}

export default ColorButton;