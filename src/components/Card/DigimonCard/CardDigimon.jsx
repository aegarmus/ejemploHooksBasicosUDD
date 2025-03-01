import { ErrorBoundary } from 'react-error-boundary';
import { useToggle } from '../../../hooks/useToggle';


import { Modal } from '../../Modal/Modal';
import { DigimonDetails } from '../DigimonDetails/DigimonDetails';

import './CardDigimon.css';
import { ErrorFallback } from '../../Error/ErrorFallBack';

export const CardDigimon = ({ digimon }) => {

    const [ isOpen, toggle ] = useToggle(false);


    return (
        <>
            <div className="card-digimon">
                <div className="card-digimon_header">
                    <img src={digimon.image} alt="" className="card-header_img" />
                    <h3 className="card-header_title">{digimon.name}</h3>
                    <p><span>ID: </span>{digimon.id}</p>
                    <button onClick={toggle} >Ver Detalles</button>
                </div>
            </div>

            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Modal toggle={toggle} isOpen={isOpen}>
                    <DigimonDetails digimonSelected={digimon.name} />
                </Modal>
            </ErrorBoundary>
        </>
    )
}