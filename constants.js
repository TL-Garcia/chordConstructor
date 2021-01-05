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

module.exports.INTERVALS = {
	unison: {
		wt: 0,
		st: 0,
	},
	minorSecond: {
		wt: 1,
		st: 1,
	},
	majorSecond: {
		wt: 1,
		st: 2,
	},
	minorThird: {
		wt: 2,
		st: 3,
	},
	majorThird: {
		wt: 2,
		st: 4,
	},
	perfectFourth: {
		wt: 3,
		st: 5,
	},
	perfectFifth: {
		wt: 4,
		st: 7,
	},
	minorSeventh: {
		wt: 6,
		st: 10,
	},
	majorSeventh: {
		wt: 6,
		st: 11,
	},
}

const {
	unison,
	minorSecond,
	majorSecond,
	minorThird,
	majorThird,
	perfectFourth,
	perfectFifth,
	minorSeventh,
	majorSeventh,
} = this.INTERVALS

module.exports.CHORD_PROPERTIES = {
	major: {
		symbolPostfix: '',
		chordPattern: [unison, majorThird, perfectFifth],
	},
	minor: {
		symbolPostfix: 'm',
		chordPattern: [unison, minorThird, perfectFifth]
	},
	'major seventh': {
		symbolPostfix: 'maj7',
		chordPattern: [unison, majorThird, perfectFifth, majorSeventh],
	},
}
