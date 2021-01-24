const waitFor = (check, max) => {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        let diff;
        const wait = setInterval(function () {
            if (check()) {
                clearInterval(wait);
                resolve(check());
            } else {
                diff = Date.now() - start;
                if (max !== undefined && diff >= max) {
                    clearInterval(wait);
                    reject(check());
                }
            }
        });
    })
}

export const speak = text => {
    let synth = window.speechSynthesis;
    let speech = new SpeechSynthesisUtterance();
    let voices;

    setTimeout(() => {
        voices = synth.getVoices();
        speech.lang = "en-US";
        speech.text = text;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;  
        speech.voice = voices[3];
        window.speechSynthesis.speak(speech);
    }, 200);
}

export const waitForElement = (elem, val, max, hasAttr) => {
    return waitFor(() => {
        let valid = false;
        if (val === 'visible') {
            valid = elem.is(':visible');
        } else if (val === 'notVisible') {
            valid = !elem.is(':visible');
        } else if (val === 'exists') {
            valid = Boolean(elem.length)
        } else if (val === 'notExists') {
            valid = !Boolean(elem.length)
        } else if (val === 'hasText') {
            valid = Boolean(elem.length) && Boolean(elem.text())
        } else if (val === 'hasAttr') {
            valid = Boolean(elem.length) && Boolean(elem.attr(hasAttr))
        }
        return valid;
    }, Number(max) * 1000).then(validity => validity, validity => validity);
}
