const { CHORD_PROPERTIES, INTERVALS } = require('./constants')

const {
	getNotesByInterval,
	getNoteByInterval,
	parseNoteFromName,
} = require('./notes.js')

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

module.exports.getChords = (chordType, amount = 6, rootName = 'C', opts) => {
	const rootNote = parseNoteFromName(rootName)


	const flatRoots =
		opts?.getFlats === false
			? []
			: getNotesByInterval(INTERVALS.perfectFourth, amount, rootNote)

	const sharpRoots =
		opts?.getSharps === false
			? []
			: getNotesByInterval(INTERVALS.perfectFifth, amount, rootNote)

	const allRoots = [rootNote, ...flatRoots, ...sharpRoots]

	const allChords = allRoots.map(root => getChord(root, chordType))
	return allChords
}
