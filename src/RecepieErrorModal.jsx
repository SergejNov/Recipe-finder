import "./RecepieErrorModal.css";

export default function RecepieErrorModal({ onClose }){

    return <div className="error-modal-overlay-" >
     <div className="error-modal-card" onClick={e => e.stopPropagation()}>
       <h2 className="error-modal-h2">Error!</h2>
       <p className="error-modal-instructions">We couldn't find what you were looking for, please try typing something else. (for example: chicken, beef, pie)</p>
     <button className="error-modal-close" onClick={onClose}>Close</button>
    </div>
   </div>
}