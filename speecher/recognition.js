module.exports = (lang, alternatives = 5, grammar) => {
  const speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()

  if (grammar) {
    const speechRecognitionList = new SpeechGrammarList()
    speechRecognitionList.addFromString(grammar, 1)
    recognition.grammars = speechRecognitionList
  }

  speechRecognition.lang = lang
  speechRecognition.interimResults = false
  speechRecognition.maxAlternatives = alternatives

  return speechRecognition
}
