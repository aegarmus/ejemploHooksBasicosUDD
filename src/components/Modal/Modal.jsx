
import './Modal.css'


export const Modal = ({ children, toggle, isOpen }) => {
    if(!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={toggle}>X</button>
                {children}
            </div>
        </div>
    )
}