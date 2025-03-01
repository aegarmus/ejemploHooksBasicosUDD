import { useContador } from "../../hooks/useContador"


export const Contador = () => {
    
    const [ contador, handleIncrementarContador, handleDecrementarContador ] = useContador(4)

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