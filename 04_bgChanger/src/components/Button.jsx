function Button({color, setColor}) {
    return (
        <button className="px-4 py-1 rounded-full shadow-md" style={{backgroundColor:color, color: color === "Black" ? "White" : "Black"}} onClick={() => setColor(color)}>{color}</button>
    )
}

export default Button;