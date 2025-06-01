function capitalize(s){
  // setup arrays of the original string to be manipulated seperated 
  let string1 = s.split(""); 
  let string2 = s.split(""); 
  // loop through every second letter and capitalize it, starting at 0
  for (i = 0; i < string1.length; i+= 2) {
    string1[i] = string1[i].toUpperCase();
  }
  // loop through every second letter and capitalize it, starting at 1
  for (i = 1; i < string2.length; i+= 2) {
    string2[i] = string2[i].toUpperCase();
  }
  // join the arrays back together as you return them
  return [string1.join(""), string2.join("")];
};