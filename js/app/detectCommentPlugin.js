import { listenToComment } from './listenToComment.js';

const checkFacebookPlugin = async () => {
    console.debug('Checking for facebook plugin...');
    if(window.location.href.includes('https://www.facebook.com/plugins/feedback.php')) {
        console.debug('Facebook plugin detected. Waiting for input box....');
        const buttonSelector = 'html#facebook div.UFIImageBlockContent button';
        const buttonText = 'post';
        const confirmationText = 'Are you sure you want to submit this post?';
        const inputSelector = 'html#facebook div.UFIInputContainer';
        const options = {
            buttonSelector,
            buttonText,
            confirmationText,
            inputSelector
        };
        listenToComment(window.document, options);
    }
};

export const detectCommentPlugin = () => {
    const location = window.location.href;
    let buttonSelector, buttonText, confirmationText, inputSelector;
    console.debug('Detecting comment box...');
    if(location.includes('youtube.com/watch')) {
        if(window.self === window.top) {
            console.debug('Youtube page detected.');
            buttonSelector = 'ytd-button-renderer#submit-button > a > .ytd-button-renderer';
            buttonText = 'comment';
            confirmationText = 'Are you sure you want to submit this comment?';
            inputSelector = 'div#contenteditable-root';
            const options = {
                buttonSelector,
                buttonText,
                confirmationText,
                inputSelector
            };
            listenToComment(window.document, options);
        }
    } else checkFacebookPlugin();
};
