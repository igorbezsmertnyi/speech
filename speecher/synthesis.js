module.exports = (text, voice, rate = 1, volume = 1, pitch = 1) => {
  const msg = new window.SpeechSynthesisUtterance()

  if (typeof voice === 'string') {
    msg.lang = voice
  } else if (typeof voice === 'object') {
    msg.voice = voice
  }

  msg.rate = rate
  msg.pitch = pitch
  msg.volume = volume
  msg.text = text
  if (!speechSynthesis.speaking) speechSynthesis.speak(msg)

  return msg
}
