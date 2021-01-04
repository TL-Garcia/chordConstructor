const {
	NOTES,
	CHORD_PROPERTIES,
	CHORD_CIRCLE_SEQUENCE,
} = require('./constants')

const { flatsSequence, sharpsSequence } = CHORD_CIRCLE_SEQUENCE
const { normalizeArr, parseNoteName } = require('./utilities.js')

const getNoteObject = (n, notePattern) => {
	const notesIndex = normalizeArr(notePattern(n), 7)
	const noteNames = notesIndex.map(n => NOTES[n])

	return noteNames
}

const getAlterations = (noteObjects, rootAlt, semitonePattern) => {
	const rootSt = noteObjects[0].semitone + rootAlt
	const chordIntervals = normalizeArr(semitonePattern(rootSt), 12)
	const alterations = chordIntervals.map(
		(st, i) => st - noteObjects[i].semitone
	)

	return alterations
}

const getChordNotes = (n, rootAlt, notePattern, semitonePattern) => {
	const noteObjects = getNoteObject(n, notePattern)
	const chordAlterations = getAlterations(noteObjects, rootAlt,semitonePattern)

	const chordNotes = noteObjects.map((note, i) => {
		const alt = chordAlterations[i]
		return {
			preFormatted: {
				alt,
				name: note.name,
			},
			name: parseNoteName(note.name, alt),
		}
	})

	return chordNotes
}

const getChord = (n, rootAlt, chordType) => {
	const { notePattern, semitonePattern, symbolPostfix } = CHORD_PROPERTIES[
		chordType
	]
	const notes = getChordNotes(n, rootAlt, notePattern, semitonePattern)
	const rootNote = notes[0].name

	const chord = {
		notes,
		name: `${rootNote} ${chordType}`,
		symbol: `${rootNote}${symbolPostfix}`,
	}

	return chord
}

const getAllChords = chordType => {
 	const chordC = getChord(0, chordType)
	const allChords = [chordC] 

	for (let i = 1; i <= 6; i++) {
		const nSharp = sharpsSequence(i)
		const nFlat = flatsSequence(i)

		const sharpChord = getChord(nSharp, chordType)
		const flatChord = getChord(nFlat, chordType)

		allChords.push(sharpChord)
		allChords.push(flatChord)
	}

	return allChords
}

console.log(getAllChords('major'))