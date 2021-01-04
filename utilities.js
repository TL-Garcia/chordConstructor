const {NOTES} = require('./constants')

module.exports.normalizeArr = (arr, maxValue) => arr.map(e => e % maxValue)

module.exports.parseNoteName = (naturalNote, alt) => {
    if (alt === -1) {
        alt = 'b'
    } else if (alt === 1) {
        alt = '#'
    } else {
        alt = ''
    }

    return `${naturalNote}${alt}`
}

module.exports.getNoteAlteration = (noteWt, noteSt) => {
    const naturalNoteSt = NOTES[noteWt].semitone
    const alteration =  noteSt - naturalNoteSt

    return alteration
}

module.exports.findNoteByInterval = (interval, rootNote) => {
    const wt = (rootNote.wt + interval.wt) % 7
    const st = (rootNote.st + interval.st) % 12
    const alt = getNoteAlteration(wt, st)

    const targetNote = {
        wt,
        st,
        alt
    }

    return targetNote
}