export function talk(text){
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = window.speechSynthesis.getVoices()[0]; //Voz PT-BR
    window.speechSynthesis.speak(utterance);
}
