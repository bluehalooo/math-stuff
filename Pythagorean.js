// Pythagorean Theorem caculator.
export function Pythagorean(a, b) {
    var c = (a**2) + (b**2)
    return (Math.sqrt(c))
}

export function findb(a,c) {
    var b = Math.sqrt((c**2) - (a**2))
}
export function finda(b,c) {
    var a = Math.sqrt((c**2) - (b**2))
}
export function isrightangle(a,b,c) {
    if ((a**2) + (b**2) == (c**2)) {
        return(true)
    }
    else {
        return(false)
    }
}