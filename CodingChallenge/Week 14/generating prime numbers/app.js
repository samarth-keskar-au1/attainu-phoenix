let primeNum = num => {
    let counter = 0;
    for(let i=1;i<=num;i++){ if(num % i == 0) counter = counter +1;}
   return  counter > 2 ? false : true;
  }
  
  let getPrimeNumbers = num => {
    let primeArray = [];
    for(let i=2;primeArray.length < num;i++){ if(primeNum(i)) primeArray.push(i);}
    console.log(primeArray);
  }

  getPrimeNumbers(10);