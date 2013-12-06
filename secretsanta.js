var _ = require('underscore'),
  people = require('optimist').argv._,   
  done = false;

// minimum number of people in a Secret Santa is 2
if (people.length < 2) {
 console.log("You must have two or more people for a scret santa");
 process.exit();
}

// pick until we have a satisfactory outcome
do {
  
  // the final array of picks
  var picks = {};
  
  // the list of present receivers left
  var receivers = _.clone(people);
  
  // loop through each person
  for (var i in people) {
  
    // get the sender's name
    var s = people[i];
    var r = null;
  
    // find a receiver
    do {
    
      // check for infinite loop - i.e. only one person left to pick who is both sender & receiver
      if ( receivers.length == 1 && receivers[0] == s) {
        break;
      }
      
      // pick a receiver at random from the list
      var j = _.random(0, receivers.length - 1);
    
      // a sender can't give a present to themselves
      if (s != receivers[j]) {
        r = receivers[j];
        receivers.splice(j, 1);
      }    
    } while(r == null);
  
    // we have a match
    if ( r != null) {
      picks[s] = r;
    }
  }

} while (_.keys(picks).length < people.length); // until we have a full list of picks

// output the answers
for (var sender in picks) {
  console.log(sender, " ------> ", picks[sender]);
}