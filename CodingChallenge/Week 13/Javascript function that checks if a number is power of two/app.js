function isPowerOfTwo(number) {
    if (number < 1) {return console.log("The given number is not a power of two");}
    while (number > 1) {
        if(number % 2 != 0) {return console.log("The given number is not a power of two");}
        number = number / 2;
    }

    console.log("The given number is a power of two") ;

}

isPowerOfTwo(899);
isPowerOfTwo(16);