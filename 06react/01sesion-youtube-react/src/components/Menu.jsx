export default function Menu() {
    //list rendering
    const menuItems = [
        { icon: "🏠", text: "Home" },
        { icon: "🩳", text: "Shorts" },
        { icon: "⏰", text: "Shorts" },
        { icon: "🍰", text: "Favs" },
    ]
    return (
    <aside id="menu">
        {
        menuItems
        .filter((item) => item.text.startsWith('S'))
        .map((item) =>{
            return (
                <div key={`menu-item-${item.text}`} className="menu-item">
            <span>{item.icon}</span>
            <span>{item.text}</span>
        </div>
            )
        } )
        }
    </aside>

    )
}

//!las llaves dentro del return enla funcion se usan para representar javascript, no es que necesariamente representen un objeto.
//!EN a lunea 14 y 15 se estan usando para que map itere sobre cada uno de los iconos del item y cada uno de los textos del item