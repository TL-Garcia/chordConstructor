const { NOTES } = require('./constants')

module.exports.normalizeArr = (arr, maxValue) => arr.map(e => e % maxValue)

module.exports.parseNoteName = ({ wt, alt }) => {
	if (alt === -1) {
		alt = 'b'
	} else if (alt === 1) {
		alt = '#'
	} else {
		alt = ''
	}

	const naturalNote = NOTES[wt]

	return `${naturalNote.name}${alt}`
}

module.exports.getNoteAlteration = ({ wt: noteWt, st: noteSt }) => {
	const naturalNoteSt = NOTES[noteWt].semitone
	const alteration = noteSt - naturalNoteSt

	return alteration
}

module.exports.getNoteByInterval = (interval, rootNote) => {
	const octave = Math.floor((rootNote.wt + interval.wt) / 7)
	const wt = (rootNote.wt + interval.wt) % 7
	const st = (rootNote.st + interval.st) % 12

	const mxml = {
		octave,
		st,
		wt,
		nameNatural: NOTES[wt].name,
	}

	const targetNote = { mxml }

	targetNote.mxml.alt = this.getNoteAlteration(mxml)
	targetNote.name = this.parseNoteName(mxml)

	return targetNote
}

module.exports.getNotesByInterval = (interval, maxNotes) => {
	const notes = []

	for (let i = 1; i <= maxNotes; i++) {
        const { wt: intervalWt, st: intervalSt } = interval

		const mxml = {
            octave: 0,
            st: (intervalSt * i) % 12,
			wt: (intervalWt * i) % 7,
        }

        mxml.nameNatural = NOTES[mxml.wt].name
        
        const note = {mxml}

		note.mxml.alt = this.getNoteAlteration(mxml)
		note.name = this.parseNoteName(mxml)

		notes.push(note)
	}

	return notes
}