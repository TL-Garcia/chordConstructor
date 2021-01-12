const { NOTES } = require('./constants')

const parseAltSymbol = alt => {
	if (alt === 0) {
		return ''
	} else {
		const symbol = alt < 0 ? 'b' : '#'
		const altSymbol = []

		for (let i = 0; i < Math.abs(alt); i++) {
			altSymbol.push(symbol)
		}

		return altSymbol.join('')
	}
}

module.exports.parseNoteName = ({ wt, alt }) => {
	const altSymbol = parseAltSymbol(alt)

	const [naturalNote] = NOTES.filter(n => n.wt === wt)

	return `${naturalNote.name}${altSymbol}`
}

module.exports.parseNoteFromName = name => {
	const [naturalName, altSymbol] = name

	const [naturalNote] = NOTES.filter(n => n.name === naturalName)
	const { st, wt } = naturalNote

	const data = { st, wt, alt: 0 }

	if (altSymbol === 'b') {
		data.alt = -1
		data.st = data.st - 1
	} else if (altSymbol === '#') {
		data.alt = 1
		data.st = data.st + 1
	}

	const note = {
		name,
		data,
	}

	return note
}

module.exports.getNoteAlteration = ({ wt, st }) => {
	const [naturalNote] = NOTES.filter(n => n.wt === wt)
	let alteration = st - naturalNote.st

	//for the edge case of Cb and B#
	if (alteration === 11) {
		alteration = -1
	} else if (alteration === -11) {
		alteration = 1
	}

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
