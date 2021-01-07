const { NOTES } = require('./constants')

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

module.exports.getNoteByInterval = (interval, {data: rootNotedata}) => {
	const wt = (rootNotedata.wt + interval.wt) % 7
	const st = (rootNotedata.st + interval.st) % 12
	const alt = this.getNoteAlteration({ wt, st })
	const name = this.parseNoteName({ wt, alt })

	const targetNote = {
		name,
		data: {
			alt,
			st,
			wt,
		},
	}
	return targetNote
}

module.exports.getNotesByInterval = (interval, maxNotes, rootNote) => {
	const notes = []
	let currentRoot = rootNote 

	for (let i = 1; i <= maxNotes; i++) {
		const note = this.getNoteByInterval(interval, currentRoot)
		currentRoot = note

		notes.push(note)
	}

	return notes
}