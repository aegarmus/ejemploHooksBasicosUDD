import { useEffect, useState } from "react";
import { CardDigimon } from "../../components/Card/CardDigimon";
import { getAllDigimons } from "../../services/fetchDigimon"

import './DigimonList.css'

export const DigimonList = () => {
    
    const [ digimons, setDigimons ] = useState([])
   /*  const [ pageables, setPageables ] = useState({}) */
    const [contador, setContador] = useState(0);

    const handleIncrementarContador = () => {
      setContador(contador + 1);
    };

    const handleDecrementarContador = () => {
      setContador(contador - 1);
    };

    useEffect(() => {
        const handleApiResponse = async() => {
            const digimonsResponse = await getAllDigimons();

            console.log('Api response', digimonsResponse)
            setDigimons([...digimonsResponse.content]);          
        }

        handleApiResponse();
    }, [])
    
/*     const handleNextPage = (url) => {
        const handleApiNextPage = () => {
             const nextPage = getNextPageDigimons(url);
             setPageables(nextPage);
        }

        handleApiNextPage()
    } 

    const handlePreviousPage = (url) => {
        const handleApiPreviousPage = () => {
            const previousPage = getNextPageDigimons(url);
            setPageables(previousPage);
        }

        handleApiPreviousPage()
    }

    console.log('Este es el estaod', digimons)
 */
    return (
      <>
        <h1>Lista de Dgimones</h1>

        <h3>{contador}</h3>
        <button onClick={handleIncrementarContador}>+</button>
        <button onClick={handleDecrementarContador}>-</button>
        <div className="card-container">
          {
            digimons.map((digimon) => (
              <CardDigimon key={digimon.id} digimon={digimon} />
            ))}
         {/*  <button onClick={handleNextPage(pageables.nextPage)}>Next Page</button>
          <button onClick={handlePreviousPage(pageables.previousPage)}>
            Previous Page
          </button> */}
        </div>
      </>
    );
}