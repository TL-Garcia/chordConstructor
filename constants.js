module.exports.NOTES = [
	{
		name: 'C',
		semitone: 0,
	},
	{
		name: 'D',
		semitone: 2,
	},
	{
		name: 'E',
		semitone: 4,
	},
	{
		name: 'F',
		semitone: 5,
	},
	{
		name: 'G',
		semitone: 7,
	},
	{
		name: 'A',
		semitone: 9,
	},
	{
		name: 'B',
		semitone: 11,
	},
]

const CHORD_PATTERNS = {
	triadic: n => [n, n + 2, n + 4],
	tetradic: n => [n, n + 2, n + 4, n + 1],
}

module.exports.CHORD_PROPERTIES = {
	major: {
		symbolPostfix: '',
		notePattern: CHORD_PATTERNS.triadic,
		semitonePattern: st => [st, st + 4, st + 7],
	},
	minor: {
		symbolPostfix: 'm',
		notePattern: CHORD_PATTERNS.triadic,
		semitonePattern: st => [st, st + 3, st + 7],
	},
	'major seventh': {
		symbolPostfix: 'maj7',
		notePattern: CHORD_PATTERNS.tetradic,
		semitonePattern: st => [st, st + 4, st + 7, st + 11],
	},
}

module.exports.CHORD_CIRCLE_SEQUENCE = {
	sharpsSequence: i => (i * 3) % 6,
	flatsSequence: i => (i * 4) % 6,
}
