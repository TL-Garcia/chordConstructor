# Chord Constructor 
This package started out of need. 

When I was writting a Web App which suggested
random chords to play, I found myself in need of a really big list of chords

* Now, you may ask yourself: *How many chords do you want?*

* The answer is: **Yes**

I wanted every chord I could think of, and since I coulnd't find anything that
delivered them in JSON, I got to work 

## What it does
This packages exports a function: `getChords(chordType)`, which returns all 
standard chords of a certain type, with the inclusion of F#/Gb. 

**AKA:** all chords between 0 & 6 alterations, both sharps and flats

Chords are output in JSON as follows: 

`chord = {[notes], name, symbol}`

**For example** 

C major chord: 
 
 `{notes: ['C', 'E', 'G'], name: 'C major', symbol: 'C'}`

The whole array of root notes would be: 

`[C, F, Bb, Eb, Db, Ab, Db, G, D, A, E, B, F#]` // 

And therefore the output would be an array of those 13 chords

## Arguments

`getChords(chordType, amount, rootName, options)`

+ **chordType:** String. The types of chords can be found in `constants.js`. I only made so many, but feel free to expand

+ **amount:** Number. The amount of alterations that you want to iterate through. Default is `6 * 2 (flats & sharps) + root = 13 chords`

+ **rootName:** String. The name of the note where you want to start the iteration. Defaults to 'C'

+ **opts:** Object. Has properties `getFlats` & `getSharps` which default to `true`. If you want to ignore any or both, just set them to false

## How it works 
WIP
