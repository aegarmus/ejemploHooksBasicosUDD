import { ErrorBoundary } from "react-error-boundary";
import { useFetchOneDigimon } from "../../../hooks/useFetchDigimons";
import { ErrorFallback } from "../../Error/ErrorFallBack";


export const DigimonDetails = ({ digimonSelected }) => {

    const [digimon, loading] = useFetchOneDigimon(digimonSelected)

    if(loading) return <p>Cargando...</p>

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div className="card">
                <div className="card_header">
                    <img src={digimon.images[0].href} alt={digimon.name} />
                    <h3>{digimon.name}</h3>
                    <p>
                        <span>ID: </span>
                        {digimon.id}
                    </p>
                </div>
    
                <div className="card_body">
                    <div>
                        <p>
                        <span>Nivel: </span>
                        {digimon.levels[0].level}
                        </p>
                        <p>
                        <span>Atributo: </span>
                        {digimon.attributes[0].attribute}
                        </p>
                        <p>
                        <span>Tipo: </span>
                        {digimon.types[0].type}
                        </p>
                    </div>
    
                    <p>{digimon.descriptions[1].description}</p>
    
                    {digimon.fields.map((field) => (
                        <div key={field.id}>
                            <img src={field.image} alt={field.field} />
                            <p>{field.field}</p>
                        </div>
                    ))}
                </div>
            </div> 
        </ErrorBoundary>
    );
}