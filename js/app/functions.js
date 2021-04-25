export const speak = text => {
    return new Promise((resolve, reject) => {
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
            resolve();
        }, 200);
    })
}
