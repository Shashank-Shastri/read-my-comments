chrome.runtime.onMessage.addListener(
    async function({ message }, sender, sendResponse) {
        console.debug(`Message from content script: ${message}`, sender);
        if(message === 'Inject Bootstrap.') {
            //To-do: Execute in frame
            await chrome.tabs.executeScript(sender.tab.ib, {
                file: 'js/lib/bootstrap.min.js'
            });
            await chrome.tabs.insertCSS(sender.tab.ib, {
                file: 'css/bootstrap.min.css'
            });
            sendResponse('Bootstrap Files injected.');
            console.debug('Bootstrap Files injected.');
        }
    }
);
