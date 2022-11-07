
export const Modal = ({show, modalText, dualButton, buttonText, onClick, onClose}) => {

    return(
        <div style={show} className="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content text-center">
                <div className="modal-body fs-5">
                    {modalText}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={onClick}>{buttonText}</button>
                    {dualButton && 
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>No</button>}
                </div>
                </div>
            </div>
        </div>
    )
}