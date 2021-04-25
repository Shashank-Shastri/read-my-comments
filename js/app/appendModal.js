import { sendMessage } from './functions.js';

const appendModal = async (modalTitle, modalText, okText) => {
    const modalInner = 
    `<div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${modalTitle}</h5>
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>${modalText}</p>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                    >
                        Cancel
                    </button>
                    <button type="button" class="btn btn-primary">
                        ${okText}
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    
    const response = await sendMessage('Inject Bootstrap.');
    console.debug(response);

    const modal = document.createElement('div');
    modal.id = 'commentConfirmationModal';
    modal.className = 'modal';
    modal.tabIndex = '-1';
    modal.innerHTML = modalInner;
    
    document.body.appendChild(modal);
};

export default appendModal;
