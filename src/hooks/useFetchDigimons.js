import { useEffect, useState } from "react";
import { getAllDigimons, getOneDigimonByNameOrId } from "../services/fetchDigimon";


export const useFetchDigimons = () => {

    const [ digimons, setDigimons ] = useState([]);

    useEffect(() => {
        const handleApiResponse = async() => {
            try {
                const digimonResponse = await getAllDigimons();
                setDigimons([...digimonResponse.content]);
            } catch (error) {
                console.error('Error al obtener los digimons', error);
            }
        }

        handleApiResponse();
    }, [])

    return digimons;
}

export const useFetchOneDigimon = (nameOrId) => {
    const [ digimon, setDigimon ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
      const handleApiResponse = async () => {
        try {
          const digimonResponse = await getOneDigimonByNameOrId(nameOrId);
          setDigimon({ ...digimonResponse });
        } catch (error) {
          console.error("Error al obtener los digimons", error);
        } finally {
            setLoading(false);
        }
      };

      handleApiResponse();
    }, []);

    return [ digimon, loading ];

}

/* 
Falsys y Truthys

Falsys - Son valores no necesariamente booleanos que se pueden considerar como falsos booleanos
- false
- 0
- ''
- null
- undefined
- NaN

Truthys - Son valores no necesariamente booleanos que se pueden considerar como verdaderos booleanos (true)
-' '
- []
- {}
-Todos los demás valores

*/