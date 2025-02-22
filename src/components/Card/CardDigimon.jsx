import './CardDigimon.css';

export const CardDigimon = ({ digimon }) => {
    return (
        <div className="card-digimon">
            <div className="card-digimon_header">
                <img src={digimon.image} alt="" className="card-header_img" />
                <h3 className="card-header_title">{digimon.name}</h3>
                <p><span>ID: </span>{digimon.id}</p>
            </div>
        </div>
    )
}