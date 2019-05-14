function isPowerOfTwo(number) {
    let mod;
    while (number > 1) {
        mod = number % 2
        number = number / 2;
    }

    mod == 0 ? console.log("The given number is a power of two") : console.log("The given number is not a power of two");
}

isPowerOfTwo(899);
isPowerOfTwo(16);