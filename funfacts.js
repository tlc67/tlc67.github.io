var factPlaceholder = document.getElementById("fun-fact");
var showFact = document.getElementById("show-fact");

var FunFacts = [
  "I have nine cats.",
  "I have rescued all of my cats.",
  "I spend a great deal of my time and money taking care of my cats.",
  "I have a dog, who thinks he is a cat.",
  "My pets are like my children.",
];

var factNumber;

function randomFact() {
  return FunFacts[factNumber];
}

showFact.addEventListener("click", function () {
  factNumber = Math.floor(Math.random() * 5);
  factPlaceholder.innerHTML = randomFact();
});
