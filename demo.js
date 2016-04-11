function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
var arr = ["Bake more cookies!", "Eat more bacon!", "Download malware!", "Eat cake!", "See a doctor!", "Beans beans the magical fruit... Maybe that would help?"];
shuffle(arr);
function speak(){
  responsiveVoice.speak(arr[0]);
  shuffle(arr);
}
