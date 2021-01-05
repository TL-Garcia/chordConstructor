const {
	CHORD_PROPERTIES,
	INTERVALS,
} = require('./constants')

const { getNotesByInterval, getNoteByInterval } = require('./utilities.js')

const getChordNotes = (rootNote, chordPattern) => {
	const chordNotes = chordPattern.map(interval =>
		getNoteByInterval(interval, rootNote.mxml)
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

const getChords = (chordType, amount) => {
	const CNote = {
		mxml: {
			alt: 0,
			octave: 0,
			nameNatural: 'C',
			st: 0,
			wt: 0,
		},
		name: 'C',
	}

	const flatRoots = getNotesByInterval(INTERVALS.perfectFourth, amount)
	const sharpRoots = getNotesByInterval(INTERVALS.perfectFifth, amount)

	const allRoots = [CNote, ...flatRoots, ...sharpRoots]

	const allChords = allRoots.map(root => getChord(root, chordType))
	return allChords
}

console.log(getChords('major', 6))
