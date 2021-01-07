const { CHORD_PROPERTIES, INTERVALS, C_Note } = require('./constants')

const { getNotesByInterval, getNoteByInterval } = require('./notes.js')

const getChordNotes = (rootNote, chordPattern) => {
	const chordNotes = chordPattern.map(
		interval => getNoteByInterval(interval, rootNote).name
	)
	return chordNotes
}

const getChord = (rootNote, chordType) => {
	const { chordPattern, symbolPostfix } = CHORD_PROPERTIES[chordType]
	const notes = getChordNotes(rootNote, chordPattern)

	const chord = {
		notes,
		name: `${rootNote.name} ${chordType}`,
		symbol: `${rootNote.name}${symbolPostfix}`,
	}

	return chord
}

const getChords = (amount, chordType, rootNote) => {
	const flatRoots = getNotesByInterval(INTERVALS.perfectFourth, amount, rootNote)
	const sharpRoots = getNotesByInterval(INTERVALS.perfectFifth, amount, rootNote)

	const allRoots = [rootNote, ...flatRoots, ...sharpRoots]

	const allChords = allRoots.map(root => getChord(root, chordType))
	return allChords
}

console.log(getChords(6, 'major', C_Note))
