const URL_BASE = "https://digi-api.com/api/v1";


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

