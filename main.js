//1.

const a = 9;
const b = '9';

if (a==b){
  console.log('equal')
}

else {
  console.log('is not equal');
}

//თავიდან ეს ორი ფუნქცია დავწერე დავალება კარგად არ წავიკითხე:)

const celsiusToFahrenheit = function(celsius){
  const cTemp = celsius;
  const toFahrenheit = cTemp * (9 / 5) + 32;
  const msg = cTemp + ' Celsius' + ' is ' + toFahrenheit + ' Fahrenheit';
  return msg;
}

console.log(celsiusToFahrenheit(25));

const fahrenheitToCelsius = function(fahr){
  const fTemp = fahr;
  const toCelsius = (fahr - 32) / 1.8;
  const msg = fTemp + ' Fahrenheit' + ' is ' + toCelsius + ' Celsius';
  return msg;
}

console.log(fahrenheitToCelsius(104));

const temp = 104;

// ეს დავალება 2.

const fahrToCelsius = function(fahrenheit){
  const temp = fahrenheit
  const toCelsius = (fahrenheit - 32) / 1.8;
  const msg = temp + ' Fahrenheit' + ' is ' + toCelsius + ' Celsius';
  
  if( typeof temp !== 'number') {
    return false
  }
  return msg;
}

console.log(fahrToCelsius(104))


//3. 

function calculate(a, operation , b) {
  if (typeof a !== "number" || typeof b !== "number" || typeof operation !== "operand") {
    return false;
  }
  let result;
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      return false;
  }
  return result;
}

console.log(calculate(5,"+",5));