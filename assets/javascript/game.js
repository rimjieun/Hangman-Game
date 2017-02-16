//need sound effects for pressing letter, hint, win, lose

var attempts = 10;
var victories = 0;
var defeats = 0;
var triedList = [];
var correct = false;


var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//is it better practice to declare another variable for uppercase since not all languages are case sensitive?

var spellsList = [
	"riddikulus",
	"obliviate",
	"sectumsempra",
	"avada kedavra",
	"alohomora",
	"lumos",
	"expelliarmus",
	"wingardium leviosa",
	"accio",
	"expecto patronum",
];

var spell = "";

var hiddenSpell = [];



// var containAllLetters = function() { //do I even need to fill in ()?

// 	for (i = 0; (i < hiddenSpell.length) && (bool = true); i++) {

// 		if (hiddenSpell[i] === spell.charAt(i)) {
// 			bool = true;
// 		}

// 		else {
// 			bool = false;
// 		}

// 	}
// };

var containsHidden = function() {
	for (i = 0; i < hiddenSpell.length; i++) {
		if (hiddenSpell[i] === "_") {
			correct = false;
			break; //hiddenSpell contains "_"
		}
		else {
			correct = true;
		}
	}
}


var resetSpell = function() {

	hiddenSpell = [];
	attempts = 10;
	triedList = [];
	

	spell = spellsList[Math.floor(Math.random() * spellsList.length)];
	spell = spell.toUpperCase();
	

	for (i = 0; i < spell.length; i++) {

			console.log(spell);		
			hiddenSpell.push(spell.charAt(i));

			if (alphabet.includes(hiddenSpell[i])) {	
				hiddenSpell[i] = "_";
			}

			else {
				hiddenSpell[i] = "/";
			}

	}
	document.getElementById("spellBox").innerHTML = hiddenSpell.join(" ");
	document.getElementById("guessLeft").innerHTML = "Attempts: " + attempts;
	document.getElementById("lettersTried").innerHTML = "Letters tried: " + triedList;
};


//-------------------------------------------------------------------------------
resetSpell();

document.onkeyup = function(event) {

	var guess = event.key.toUpperCase();
	
	if (spell.includes(guess))  {
		containsHidden();
		if (correct = false) {
			for (i = 0; i < spell.length; i++) {
				if (spell.charAt(i) === guess) {
					hiddenSpell[i] = spell.charAt(i);
				}
			}
			document.getElementById("spellBox").innerHTML = hiddenSpell.join(" ");
		}
		
		else {
			victories++;
			document.getElementById("victories").innerHTML = "Victories: " + victories;
			resetSpell();
			
		}
	}

	else {

		if (attempts > 1) {

			attempts--;

			triedList.push(guess);

			document.getElementById("guessLeft").innerHTML = "Attempts: " + attempts;

			document.getElementById("lettersTried").innerHTML = "Letters tried: " + triedList.join(", ");

		}

		else {
			defeats++;
			document.getElementById("defeats").innerHTML = "Defeats: " + defeats;
			resetSpell();
			
		}
		
	}
	

}




