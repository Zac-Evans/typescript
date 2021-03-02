const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const inmportantDates: (Date | string)[] = [new Date()];
inmportantDates.push();
