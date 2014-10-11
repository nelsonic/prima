var primes = [];
primes.push(2);

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

var start = new Date().getTime();

for(i=3; i < 1000000; i = i + 2) {
  if(isPrime(i)){
    primes.push(i);
  }
}

var end = new Date().getTime();
var time = end - start;

console.log(primes.join(' '));
console.log('Count: ' + primes.length)
console.log('Time taken: '+ time +'ms')
