# speech-js
speech recognition and speech synthesis

[DEMO](https://igorbezsmertnyi.github.io/speech-demo/)

* [Instalation](#instalation)
* [Quick start](#quick-start)
* [Synthesis](#synthesis)
  * [voice](#voice)
  * [synthesis methods](#synthesis-methods)
* [Recognition](#recognition)
  * [grammar](#grammar)
  * [recognition methods](#recognition-methods)

# Instalation
`npm install speech-js --save` or `yarn add speech-js`

# Quick start
```
import speech from 'speech-js'

speech.synthesis('hello world', 'en-US') // speech synthesis module

const recognition = speech.recognition('en-US') // speech recognition module
recognition.start()
recognition.onresult = e => {
  let result = e.results[0][0].transcript
  speech.synthesis(result, 'en-US')
}
```

# Synthesis

`speech.synthesis(text, voice, rate, volume, pitch)`

| Properties | Default value | Type             | Range      |
| ---------- | ------------- | ---------------- | ---------- |
| text       | ' '           | String           |            |
| voice      | system lang   | String or Object |            |
| reate      | 1             | Number           | 0.1 - 10   |
| volume     | 1             | Number           | 0 - 1      |
| pitch      | 1             | Number           | 0 - 2      |

### voice
Voice properties can by `String` or `Object`

If you use `String` properties for `voice`, speech set lang properties. For example:
```
speech.synthesis('Hello World', 'en-US')
```

Or if you want use the other voices on your computer, code will be looks like this:

```
speechSynthesis.onvoiceschanged = () => {
  const voices = window.speechSynthesis.getVoices()
  speech.synthesis('hello world', voices[0])
}
```
where `voices` is an array with voices installed on your computer

### synthesis methods
`speechSynthesis.cancel()`

`speechSynthesis.pause()`

`speechSynthesis.resume()`

# Recognition

`speech.recognition(lang, alternatives, grammar)`

| Properties    | Default value | Type             | Range      |
| ------------- | ------------- | ---------------- | ---------- |
| lang          | system lang   | String           |            |
| alternatives  | 5             | Number           | infinity   |
| grammar       | ' '           | String           |            |

### grammar
The grammars property of the SpeechRecognition interface returns and sets a collection of SpeechGrammar objects that represent the grammars that will be understood by the current SpeechRecognition.

Example:
```
const grammar = #JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;
```

### recognition methods

`speech.recognition().start()`

`speech.recognition().stop()`

`speech.recognition().abort()`
