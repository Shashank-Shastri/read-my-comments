(async () => {
    const src = chrome.extension.getURL('js/app/detectCommentPlugin.js');
    const contentScript = await import(src);
    contentScript.detectCommentPlugin();
})();
