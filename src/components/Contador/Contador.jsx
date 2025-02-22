import { useState } from "react"


export const Contador = () => {
    
    const [ contador, setContador ] = useState(0)

    const handleIncrementarContador = () => {
        setContador(contador + 1)
        /* contador += 1 // contador = contador + 1 */
        console.log(contador)
    }

    const handleDecrementarContador = () => {
        setContador(contador - 1)
        /* contador -= 1 // contador = contador - 1 */
        console.log(contador)
    }

    return(
        <>
            <h2>Contador</h2>
            <h3>{contador}</h3>
            <button onClick={handleIncrementarContador}>+</button>
            <button onClick={handleDecrementarContador}>-</button>
        </>
    )
}



/* const objeto  = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}

const nombre1 = objeto.nombre

const { nombre, edad } = objeto

console.log(nombre)


const array = [1, 2, 3, 4, 5]

const [uno, dos, tres, dinosaurio, cinco] = array

uno + dinosaurio */

/* class Constructo {
    constructor() {
        this.contador = 0
    }

    get contador() {
        return this.contador
    }

    getContador() {

    }

    set contador(valorNuevo) {
        this.contador = valorNuevo  
    }

    setContador() {
        
    }

} */