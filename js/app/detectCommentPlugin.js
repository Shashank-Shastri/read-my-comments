import { readAloud } from './readAloud.js';

export const detectCommentPlugin = () => {
    let location = window.location.href,
        inputSelector, buttonSelector, condition = 'exists';
    if(location.includes('youtube.com/watch')) {
        inputSelector = 'div#contenteditable-root', 
        buttonSelector = 'ytd-button-renderer#submit-button > a > paper-button';
    }
    readAloud(inputSelector, buttonSelector, condition);
};
