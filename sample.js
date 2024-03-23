//  To check the given string is valid

const CheckJSONValidFoTheData = (data) => {
  if (typeof data !== "string") {
    return false;
  }

  try {
    // console.log("hello try")
    if (JSON.parse(data)) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

CheckJSONValidFoTheData('{"sample": "hello"}');

const data = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  players: {
    team: {
      team1: "1",
      team2: "2",
      team3: "3",
      team4: "4",
      team5: "5",
      team6: "6",
    },
    name: "ann",
    age: "21",
  },
  batters: {
    batter: [
      { id: "1001", type: "Regular" },
      { id: "1002", type: "Chocolate" },
      { id: "1003", type: "Blueberry" },
      { id: "1004", type: "Devil's Food" },
    ],
  },
  topping: [
    { id: "5001", type: "None" },
    { id: "5002", type: "Glazed" },
    { id: "5005", type: "Sugar" },
    { id: "5007", type: "Powdered Sugar" },
    { id: "5006", type: "Chocolate with Sprinkles" },
    { id: "5003", type: "Chocolate" },
    { id: "5004", type: "Maple" },
  ],
};

const playerKeys = Object.entries(data.players);

// console.log(playerKeys.filter(([key]) => ['team'].includes(key)).map(([key, value]) => {
//   return { [key]: value }
// }))

const firstElementOfAnArray = (numberArray) => numberArray.find((el) => el);
// console.log(firstElementOfAnArray([3,5,6,8]))

const lastElementOfAnArray = (numberArray) =>
  numberArray[numberArray.length - 1];
// console.log(lastElementOfAnArray([1,2,3,4]));

const joinArrayIntoString = (array) => array.join();
// console.log(joinArrayIntoString(["Red", "Green", "White", "Black"]));

const addDashBetweenEvenNumbers = (number) => {
  const numberArray = number.toString();
  let results = [numberArray[0]];

  for (i = 1; i < numberArray.length; i++) {
    if (numberArray[i - 1] % 2 === 0 && numberArray[i] % 2 === 0) {
      results.push("-", numberArray[i]);
    } else {
      results.push(numberArray[i]);
    }
  }
  console.log(results.join(""));
};
// console.log(addDashBetweenEvenNumbers('02546'));

const sortArray = (numberArray) => {
  return numberArray.sort((a, b) => a - b);
};
// console.log(sortArray([ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]));

const mostFrequentItem = (numberArray) =>
  numberArray
    .sort(
      (a, b) =>
        numberArray.filter((el) => el === a).length -
        numberArray.filter((el) => el === b).length
    )
    .pop();

// console.log(
//   mostFrequentItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3])
// );

const duplicatesFromAnArray = (inputArray) => inputArray.filter((item,index) => inputArray.indexOf(item) !== index ) 

// console.log(duplicatesFromAnArray([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
