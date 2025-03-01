import { useState } from "react";

import { useFetchDigimons } from "../../hooks/useFetchDigimons";

import { CardDigimon } from "../../components/Card/DigimonCard/CardDigimon";
import { InputBusqueda } from "../../components/Input/InputBusqueda";

import './DigimonList.css'

export const DigimonList = () => {


    const [ digimonBuscado, setDigimonBuscado ] = useState('')
    const digimons = useFetchDigimons();



    return (
      <>
        <h1>Lista de Dgimones</h1>
        <InputBusqueda
          placeholderText="Ingresa el Digimon que buscas... "
          onSearch={setDigimonBuscado}
          buscado={digimonBuscado}
        />
        <div className="card-container">
          {digimons.map((digimon) => (
            <CardDigimon key={digimon.id} digimon={digimon} />
          ))}
        </div>
      </>
    );
}