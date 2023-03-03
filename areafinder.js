const pi = 3.14159265358979323

export function rectarea(x, y) {
    return(x*y);
}
export function triarea(base, height) {
    return (.5 * base * height);
}

export function circarea(radius) {
    return rectarea(radius, radius) * pi
}
export function regularpolygonarea(number_of_sides, side_length) {
    var apothem = side_length/2 * Math.tan(180/number_of_sides);
    return ((number_of_sides * side_length * apothem) / 2);
}