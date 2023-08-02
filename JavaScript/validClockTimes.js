//this question requires you to think alot more about the logic of clocks than the logic of code.
//its a doozy to break down, but i'll do my best


function validClockTimes(time) {
  let hrChoices = 1;
  if (time[0] == '?' && time[1] == '?') {
    //if both hour markers on the timestamp are "?",
    //set the possible-hours to 24, as there are 24 possible hours
    hrChoices = 24;
  } else if (time[0] == '?') {
    //if the first hour-marker is "?",
    //if the hour-marker after that is a 3, set the possible hours to 3
        //because if the hour marker is a 3, the only possible choices are '0','1', and '2'
        //if it is not a 3, the only possible choices are '1' and '2'
    hrChoices = time[1] == '3' ? 3 : 2;
  } else if (time[1] == '?') {
    //if the second hour-marker is "?", if the first hour-marker is a '2', set the possible hours to '4'
    hrChoices = time[0] == '2' ? 4 : 10;
  }
  console.log(hrChoices)
  let minChoices = 1

  if (time[3] == '?' && time[4] == '?') {
    //if both minute-markers are "?", there are 60 possible minutes they could both be (0-60)
    minChoices = 60;
  } else if (time[3] == '?') {
    //if the first minute-marker is "?", there are 6 possible numbers it could be (1-6)
    minChoices = 6;
  } else if (time[4] == '?') {
    //if the second minute-marker is "?", there are 10 possible numbers (0-9)
    minChoices = 10;
  }
  console.log(minChoices)
  return hrChoices * minChoices;
};

console.log(validClockTimes("?5:00"))