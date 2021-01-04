module.exports.normalizeArr = (arr, maxValue) => arr.map(e => e % maxValue)

module.exports.parseNoteName = (naturalNote, alt) => {
    if (alt === -1) {
        alt = 'b'
    } else if (alt === 1) {
        alt = '#'
    } else {
        alt = ''
    }

    return `${naturalNote}${alt}`
}