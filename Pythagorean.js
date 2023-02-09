// Pythagorean Theorem caculator.
function Pythagorean(a, b) {
    var c = (a**2) + (b**2)
    return (Math.sqrt(c))
}

function findb(a,c) {
    var b = Math.sqrt((c**2) - (a**2))
}
function finda(b,c) {
    var b = Math.sqrt((c**2) - (b**2))
}
function isrightangle(a,b,c) {
    if ((a**2) + (b**2) == (c**2)) {
        return(true)
    }
    else {
        return(false)
    }
}