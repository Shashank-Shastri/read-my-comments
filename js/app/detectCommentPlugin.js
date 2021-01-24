import { readAloud } from './readAloud.js';

export const detectCommentPlugin = () => {
    readAloud(
        'div#contenteditable-root',
        'ytd-button-renderer#submit-button > a > paper-button',
        'exists'
    );
};
