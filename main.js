
var _ = require('underscore');

var secondGreatLow = function(inArray) {
	if(inArray.length < 2) {
		return 'Array needs to have 2 or more elements';
	}
	else {
		inArray.sort( function(a,b) { return a - b } );
		var inArrayUnique = _.uniq(inArray);
		var secondLowestNumber = inArrayUnique[ 1 ].toString();
		var secondGreatestNumber = inArrayUnique[ inArrayUnique.length - 2 ].toString();
		var result = secondLowestNumber + ' ' + secondGreatestNumber;
		return result;
	}
};

var timeConvert = function(inNumber) {
	var hours = Math.floor(inNumber / 60);
	var minutes = inNumber % 60;
	var hoursString = hours.toString();
	var minutesString = minutes.toString();
	var result = hoursString + ':' + minutesString;
	return result;
};

var countElementInArray = function(element, inArray) {
	var count = 0;
	for(var i=0; i < inArray.length; i++) {
		if(inArray[ i ] === element) {
			count++;
		}
	}
	return count;
};

var bracketMatcher = function(inString) {
	var inArray = inString.split('');
	var leftBracketCount = countElementInArray('(', inArray);
	var rightBracketCount = countElementInArray(')', inArray);
	var result = (leftBracketCount === rightBracketCount) ? true : false;
	return result;
};

if(process.argv.length > 2) {
	var inputString = process.argv[2];
	var inputArray = inputString.split(',');
	console.log('type inputArray: ', typeof(inputArray));
	console.log('inputArray: ', inputArray);
	var result = secondGreatLow(inputArray);
	console.log('Result: ', result);
}