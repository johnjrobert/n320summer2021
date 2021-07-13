//array for each created instrument
let instruments = [];

//instance of array from each individual instrument, with the loudness passed in.
instruments[0] = new Woodwind(10);
instruments[1] = new Percussion(50);
instruments[2] = new String(25);

//for each loop as demonstrated in the PP slides in order to make the instruments in the array "play"
instruments.forEach((instruments) => {
  instruments.concert();
});
