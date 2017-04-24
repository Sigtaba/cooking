var gallons = function(liters) {
	return liters * 0.264172052;
};

var liters = function(gallons) {
 return gallons / 0.264172052;
};

var litersInput = parseInt(prompt("Enter amount in liters: "));
var gallonsInput = parseInt(prompt("Enter amount in gallons "));

alert("This equals " + gallons(litersInput) + " gallons.");
alert("This equals " + liters(gallonsInput) + " liters.");
