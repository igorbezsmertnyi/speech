module.exports = (text, lang) => {
  speechSynthesis.onvoiceschanged = () => {
    const msg = new SpeechSynthesisUtterance()
    const voices = window.speechSynthesis.getVoices()
    const voice = voices.find(voice => voice.lang == lang)
    msg.voice = voice
    msg.rate = 1
    msg.pitch = 1
    msg.text = text
    if (!speechSynthesis.speaking) speechSynthesis.speak(msg)
  }
}
