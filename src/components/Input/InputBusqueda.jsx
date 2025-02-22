import { useState } from "react"

export const InputBusqueda = () => {
    const [ textInput, setTextInput ] = useState('');

    const handleSubmit = (event) => {
        setTextInput(event.target.value)
        console.log(event.target.value)
    }

    return (
        <>
            <input 
                type='text'
                value={textInput}
                onChange={handleSubmit}
                placeholder="Escribe algo...."
            />

            <p>Escribiste: {textInput}</p>
        </>
    )
}