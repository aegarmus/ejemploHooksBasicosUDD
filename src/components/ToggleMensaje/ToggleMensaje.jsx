import { useState } from "react"

export const ToggleMensaje = () => {
    const [ mostrar, setMostrar ] = useState(true)

    const handleMostrar = () => {
        setMostrar(!mostrar)
    }
    return (
        <>
            <button onClick={handleMostrar}>
                { mostrar ? 'Ocultar' : 'Mostrar' }
            </button>

            {/* { mostrar ? <p>Este es un Mensaje Secreto</p> : null } */}

            { mostrar && <p>Este es un Mensaje Secreto</p> }
        </>
    )
}


/*

! = Negando una expresión


Si Niego una Verdad = Falso

Si niego una falsedad Verdadero


!true = es falso el valor true = false

!false = es falso el valor false = true
*/

/* 
if(mostrar) {
   return 'Ocultar'
} else {
    return 'Mostrar'
} */