// 1. Soru
const isPrime = (number) => {
  if (number < 2) return false;
  let counter = 0;
  for (let i = 0; i <= number / 2; i++) {
    if (number % i === 0) counter += 1;
  }
  if (counter <= 1) {
    return true;
  } else {
    return false;
  }
};

function findPrime(...numbers) {
  numbers.forEach((number) => {
    if (number < 2) {
      console.log(`Asal sayılar negatif olamaz.`);
    }
    console.log(
      isPrime(number)
        ? `${number} asal sayıdır.`
        : `${number} asal sayı değildir.`
    );
  });
}

// 2. Soru
const findPerfectDivisors = (number) => {
  let perfectDivisors = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      perfectDivisors.push(i);
    }
  }
  return perfectDivisors;
};

const arraySum = (array) => {
  let sum = 0;
  array.forEach((number) => {
    sum += parseInt(number);
  });
  return sum;
};

const findFriendlyNumbers = (number1, number2) => {
  let num = arraySum(findPerfectDivisors(number1));
  let num2 = arraySum(findPerfectDivisors(number2));

  num === number2 && num2 === number1
    ? console.log(`${number1} ve ${number2} arkadaş sayılardır.`)
    : console.log(`${number1} ve ${number2} arkadaş sayı değildir.`);
};

// 3. Soru
const firstThousandPerfectNumbers = () => {
  let perfectNumbers = [];
  let totalDivisors = 0;
  for (let i = 1; i <= 1000; i++) {
    totalDivisors = arraySum(findPerfectDivisors(i));
    if (i === totalDivisors) {
      perfectNumbers.push(i);
    }
  }
  console.log(`Perfect Numbers:\n${perfectNumbers}`);
};

// 4. Soru
const firstThousandPrimeNumbers = () => {
  let primeNumbers = [];
  for (let i = 0; i <= 1000; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  console.log(`İlk bin asal sayı:\n${primeNumbers}`);
};

findPrime(2, 3, 4, 5, 7, 9, 8, 11, 15, 17, 19, 37);

findFriendlyNumbers(220, 284);

firstThousandPerfectNumbers();

firstThousandPrimeNumbers();
