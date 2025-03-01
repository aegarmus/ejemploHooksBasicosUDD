import { useState } from "react";

/**
 * Custom Hook para controlar un contador y sus que incrementa y decrementa en 1
 * @param {Number} initialValue - Valor inicial del contador
 * @returns -  Retorna un Array con el valor del contador, la función de incrementar y la función de decrementar
 */
export const useContador = (initialValue) => {
    const [ contador, setContador ] = useState(initialValue);

    const handleIncrementarContador = () => {
        setContador(contador + 1);
    }

    const handleDecrementarContador = () => {
        setContador(contador - 1);
    }

/*     return {
        contador,
        handleIncrementarContador,
        handleDecrementarContador
    } */

    return [ 
        contador, 
        handleIncrementarContador, 
        handleDecrementarContador 
    ]
}