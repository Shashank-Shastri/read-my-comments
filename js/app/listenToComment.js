import appendModal from './appendModal.js';
import { speak } from './functions.js';

export const listenToComment = async (listenerContext, options) => {
    console.debug('Listening for click events.');
    const { buttonSelector, buttonText, confirmationText, inputSelector } = options;
    let commentBoxInput, commentBoxSubmitButton, eventTarget;
    let realClick = true;
    await appendModal('Confirm Comment', confirmationText, 'Comment');
    const maybeConfirmComment = async event => {
        const { target } = event;
        commentBoxInput = $(inputSelector);
        commentBoxSubmitButton = $(buttonSelector);
        if (target.className === commentBoxSubmitButton?.[0]?.className && realClick && target.innerText.toLowerCase().includes(buttonText)) {
            event.stopPropagation();
            const text = commentBoxInput.text();
            if(!text) return;
            await speak(`You're commenting: ${text}. ${confirmationText}`);
            try {
                eventTarget = target;
                $('#commentConfirmationModal').modal('show');
                $('#commentConfirmationModal .btn-primary').click(function() {
                    realClick = false;
                    eventTarget?.click();
                    eventTarget = null;
                    $('#commentConfirmationModal').modal('hide');
                });
            } catch(e) {
                const confirmation = confirm(confirmationText);
                if (confirmation) {
                    realClick = false;
                    target.dispatchEvent(event);
                }
            }
            return;
        } else if(!realClick) {
            realClick = true;
            return;
        } else return;
    };
    listenerContext.addEventListener('click', maybeConfirmComment, true);
};
