/*
Задание 1
*/


const array = [1, 2, 3, 4, 5, 0, null, NaN, NaN, "qwer"];

function countTypeElementInArray(array) {
	let countOdd = 0;
	let countEven = 0;
	let countNull = 0;
	let countNaN = 0;
	let conutOther = 0;

	for (let i = 0; i < array.length; i++) {
	  let item = array[i];
	  switch (typeof item) {
		case "number":
		  if (isNaN(item)) {
			countNaN += 1;
		  } else {
			if (item % 2 === 0) {
			  countEven += 1;
			} else {
			  countOdd += 1;
			}
			break;        
		  }
		case "object":
		  if (item === null) {
			countNull += 1;
		  }
		  break;
		default:
		  conutOther += 1;
	  }
	}

	console.log(`countOdd = ${countOdd}, countEven = ${countEven}, 
		countNull = ${countNull}, countNaN = ${countNaN}, conutOther = ${conutOther}`);  
}


countTypeElementInArray(array);



/*
Задание 2
*/


function getTypeNumber(number) {
  if (number > 1000) {
    console.log('Данные неверны');
    return;
  } 
  
  if (number === 0 || number === 1) {
    console.log(`${number} не является простым числом`);
    return;
  }
  
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(`${number} не является простым числом`);
      return;
    }
  }
  
  console.log(`${number} является простым числом`);
  return;
}


getTypeNumber(0);
getTypeNumber(1);
getTypeNumber(1000);
getTypeNumber(3);
getTypeNumber(4);
getTypeNumber(7);
getTypeNumber(73);
getTypeNumber(74);



/*
Задание 3
*/

function mySum(externalNumber) {
  return function(internalNumber) {
    return externalNumber + internalNumber;
  }
}

const func = mySum(10);
let sum = func(20);

console.log(sum);


/*
Задание 4
*/

let numberA = 5;
let numberB = 15;


(function(numberA, numberB) {
	const count = function() {
	  let counter = 0;
      
	  function count(numA, numB) {
		if (counter === 0) {
		  counter = numA;
		}
        
		if (counter <= numB) {
		  console.log(counter);
		  counter++;      
		}
	  }
      
	  return count;
	}();

	const intervalId = setInterval(count, 1000, numberA, numberB);

	setTimeout(function(){
	  clearInterval(intervalId);
	}, ((numberB - numberA + 1)*1000));
})(numberA, numberB);


/*
Задание 5
*/


const powFunc = (x, n) => {
  console.log(Math.pow(x, n));
};


powFunc(10, 0);
powFunc(3, 3);
powFunc(5, 5);

