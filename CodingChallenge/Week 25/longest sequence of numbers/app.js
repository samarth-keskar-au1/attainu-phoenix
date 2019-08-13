function longestSequence(limit) {
    let longestSequenceLength = 0;
    let startingNum = 0;
    
    const getSequenceLength = num => {
        let sequence = [num];
        
        while (num > 1) {
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = num * 3 + 1;
            }
            sequence.push(num);
        }
        return sequence.length;
    }
    
    for (let i = 1; i < limit; i++) {
        if (getSequenceLength(i) > longestSequenceLength) {
            longestSequenceLength = getSequenceLength(i);
            startingNum = i;
        }
    }
    
    console.log(startingNum, longestSequenceLength);
    return startingNum;
}

longestSequence(1000000);

