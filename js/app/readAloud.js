import { speak, waitForElement } from './functions.js';

export const readAloud = (commentBoxInputSelector, commentBoxSubmitButtonSelector, condition, hasAttr) => {
    let commentBoxInput, commentBoxSubmitButton, elementExists;
    let waitForButton = async () => {
        commentBoxInput = $(commentBoxInputSelector),
        commentBoxSubmitButton = $(commentBoxSubmitButtonSelector),
        elementExists = await waitForElement(commentBoxSubmitButton, condition, 1, hasAttr);
        if (elementExists) {
            commentBoxSubmitButton.click(() => {
                let text = commentBoxInput.text();
                speak(`You've commented: ${text}`);
            });
        } else window.requestAnimationFrame(waitForButton);
    }
    waitForButton();
};
