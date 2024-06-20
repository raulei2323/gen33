import { useState } from "react"

export default function OtroBoton ({ text, alClick }) {
    const [count, setCount] = useState(0)

    function clickHandler() {
        setCount(count + 1)
        alClick()
    }


    return (
    <button onClick={clickHandler}>
        {text}
        {count}
        </button>
)
}