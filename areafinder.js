const pi = 3.14159265359

function rectarea(x, y) {
    return(x*y);
}
function triarea(base, height) {
    return (.5 * base * height);
}

function circarea(radius) {
    return rectarea(radius, radius) * pi
}