'use strict';

const synthesis = require('./speecher/synthesis')
const recognition = require('./speecher/recognition')

const speech = {}
speech.synthesis = synthesis
speech.recognition = recognition

module.exports = speech
