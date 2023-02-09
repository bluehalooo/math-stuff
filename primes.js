
function prime(x){
var prime = true;
// If number is 1, not prime nor composite.
if (x == 1){
    console.log("This number is 1, which is neither prime nor composite.");
    return(false);
}

if (x < 1) {
    console.log("This number is not a positive number, so it is not a prime.")
    return(false);
}

else if (x>1) {
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            console.log("This number is not prime.");
            prime = false;
            return(false);
            break;
        }
    }
}
if (prime == true) {
    console.log("This number is prime.")
    return (true);
}
}
//The following checks if the input will work as p in the equation (2^p)-1 = p, where p is a prime.
function mersenne(input) {
    if (prime(input)) {
        var willitwork = ((2**input)-1);
        return(prime(willitwork));
    }
}

