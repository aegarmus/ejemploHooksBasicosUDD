const URL_BASE = "https://digi-api.com/api/v1";

/**
 * Peteción Get a la API de digimons para obtener todos los digimons
 * @returns {Promise<Array>} - Retorna un objeto con la información de los digimons en content y la propiedad de paginación en pegeable
 */
export const getAllDigimons = async() => {
    try {
        const response = await fetch(`${URL_BASE}/digimon`);
        if(!response.ok) throw new Error('Error al solicitar los digimones'); //Guard Condition

        const data = await response.json();
      
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

export const getOneDigimonByNameOrId = async(request) => {
  try {
      const response = await fetch(`${URL_BASE}/digimon/${request}`);
      if (!response.ok) throw new Error(`Error al solicitar el digimon con el identificador ${request}`);

      const data = await response.json();
      return data;
  } catch (error) {
      throw new Error(error);
  }
}

export const getNextPageDigimons = async(url) => {
     try {
       const response = await fetch(`${url}`);
       if (!response.ok) throw new Error("Error al solicitar los digimones"); //Guard Condition

       const data = await response.json();
       return data;
     } catch (error) {
       throw new Error(error);
     }
}

