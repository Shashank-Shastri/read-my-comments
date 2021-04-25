import { speak } from './functions.js';

export const listenToComment = (listenerContext, options) => {
    console.debug('Listening for click events.');
    const { buttonSelector, buttonText, confirmationText, inputSelector } = options;
    let commentBoxInput, commentBoxSubmitButton;
    let realClick = true;
    const maybeConfirmComment = async event => {
        const { target } = event;
        commentBoxInput = $(inputSelector);
        commentBoxSubmitButton = $(buttonSelector);
        if (target.className === commentBoxSubmitButton?.[0]?.className && realClick && target.innerText.toLowerCase().includes(buttonText)) {
            event.stopPropagation();
            const text = commentBoxInput.text();
            if(!text) return;
            await speak(`You're commenting: ${text}. ${confirmationText}`);
            const confirmation = confirm(confirmationText);
            if (confirmation) {
                realClick = false;
                target.dispatchEvent(event);
            } else return;
        } else if(!realClick) {
            realClick = true;
            return;
        } else return;
    };
    listenerContext.addEventListener('click', maybeConfirmComment, true);
};
