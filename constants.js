module.exports.NOTES = [
	{
		name: 'C',
		wt: 0,
		st: 0,
	},
	{
		name: 'D',
		wt: 1,
		st: 2,
	},
	{
		name: 'E',
		wt: 2,
		st: 4,
	},
	{
		name: 'F',
		wt: 3,
		st: 5,
	},
	{
		name: 'G',
		wt: 4,
		st: 7,
	},
	{
		name: 'A',
		wt: 5,
		st: 9,
	},
	{
		name: 'B',
		wt: 6,
		st: 11,
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
	augmentedSecond: {
		wt: 1,
		st: 3,
	},
	minorThird: {
		wt: 2,
		st: 3,
	},
	majorThird: {
		wt: 2,
		st: 4,
	},
	diminishedFourth: {
		wt: 3,
		st: 4,
	},
	perfectFourth: {
		wt: 3,
		st: 5,
	},
	augmentedFourth: {
		wt: 3,
		st: 6,
	},
	diminishedFifth: {
		wt: 4,
		st: 6
	},
	perfectFifth: {
		wt: 4,
		st: 7,
	},
	augmentedFifth: {
		wt: 4,
		st: 8
	},
	minorSixth: {
		wt: 5,
		st: 8
	},
	majorSixth: {
		wt: 5,
		st: 9
	},
	diminishedSeventh: {
		wt: 6,
		st: 9
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
	augmentedSecond,
	minorThird,
	majorThird,
	diminishedFourth,
	perfectFourth,
	augmentedFourth,
	diminishedFifth,
	perfectFifth,
	augmentedFifth,
	minorSixth,
	majorSixth,
	diminishedSeventh,
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
		chordPattern: [unison, minorThird, perfectFifth],
	},
	'major seventh': {
		symbolPostfix: 'maj7',
		chordPattern: [unison, majorThird, perfectFifth, majorSeventh],
	},
	'minor seventh': {
		symbolPostfix: 'min7',
		chordPattern: [unison, minorThird, perfectFifth, minorSeventh]
	},
	'half diminished': {
		symbolPostfix: 'ø7',
		chordPattern: [unison, minorThird, perfectFifth, minorSeventh]
	},
	'diminished seventh': {
		symbolPostfix: 'o7',
		chordPattern: [unison, minorThird, diminishedFifth, diminishedSeventh]
	},
	'powerchord': {
		symbolPostfix: '5',
		chordPattern: [unison, perfectFifth, unison]
	}
}
