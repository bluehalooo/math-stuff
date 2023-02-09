
function prime(x){
var prime = true;
// If number is 1, not prime nor composite.
if (x == 1){
    console.log("This number is 1, which is neither prime nor composite.");
    return(0);
}

if (x < 1) {
    console.log("This number is not a positive number, so it is not a prime.")
    return(0);
}

else if (x>1) {
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            console.log("This number is not prime.");
            prime = false;
            return(0);
            break;
        }
    }
}
if (prime == true) {
    console.log("This number is prime.")
    return (1);
}
}
