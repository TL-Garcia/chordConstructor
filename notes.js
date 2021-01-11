const { NOTES } = require('./constants')

module.exports.parseNoteName = ({ wt, alt }) => {
	if (alt === -1) {
		alt = 'b'
	} else if (alt === 1) {
		alt = '#'
	} else {
		alt = ''
	}

	const [naturalNote] = NOTES.filter(n => n.wt === wt)

	return `${naturalNote.name}${alt}`
}

module.exports.parseNoteFromName = name => {
	const [naturalName, altSymbol] = name

	const [naturalNote] = NOTES.filter(n => n.name === naturalName)
	const { st, wt } = naturalNote

	const data = { st, wt, alt: 0 }

	if (altSymbol === 'b') {
		data.alt = -1
	} else if (altSymbol === '#') {
		data.alt = 1
	}

	const note = {
		name,
		data,
	}

	return note
}

module.exports.getNoteAlteration = ({ wt, st }) => {
	const [naturalNote] = NOTES.filter(n => n.wt === wt)
	const alteration = st - naturalNote.st

	return alteration
}

module.exports.getNoteByInterval = (interval, { data: rootNotedata }) => {
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
