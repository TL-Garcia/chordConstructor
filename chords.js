const { CHORD_PROPERTIES, INTERVALS, C_Note } = require('./constants')

const { getNotesByInterval, getNoteByInterval, parseNoteFromName } = require('./notes.js')

const getChordNotes = (rootNote, chordPattern) => {
	console.log(rootNote)
	const chordNotes = chordPattern.map(
		interval => getNoteByInterval(interval, rootNote).name
	)
	return chordNotes
}

module.exports.getChord = (rootNote, chordType) => {
	const { chordPattern, symbolPostfix } = CHORD_PROPERTIES[chordType]
	const notes = getChordNotes(rootNote, chordPattern)

	const chord = {
		notes,
		name: `${rootNote.name} ${chordType}`,
		symbol: `${rootNote.name}${symbolPostfix}`,
	}

	return chord
}

module.exports.getChords = (amount, chordType, startingNoteName) => {
	const startingNote = parseNoteFromName(startingNoteName)
	const flatRoots = getNotesByInterval(INTERVALS.perfectFourth, amount, startingNote)
	const sharpRoots = getNotesByInterval(INTERVALS.perfectFifth, amount, startingNote)

	const allRoots = [startingNote, ...flatRoots, ...sharpRoots]

	const allChords = allRoots.map(root => this.getChord(root, chordType))
	return allChords
}

console.log(this.getChords(6, 'major', 'C'))