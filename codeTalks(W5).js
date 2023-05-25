console.table(createArray(100));

function createArray(size) {
  const start = new Date(); //here i would think it would measure the time taken to create the array
  const array = [];
  for (let i = 0; i < size; i++) {
    //itterrate a random number from 1 and 100 with math random times 100 first because it's in parentheses, then the number rounds down with math.floor then he number we getid added in with our push
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log("creating array: ", (new Date() - start) / 1000); // i would think here it would calculate the time it takes to create the array by subtracting start and diving it 1000 .
  return array;
}
