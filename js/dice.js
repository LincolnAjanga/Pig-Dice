//Pig dice logic

//Javascript welcome logic

var welcomeToPigDice = function(){
	var result = ""
	if (userInput ! = " ") {
		result.push('Welcome'+' '+userInput+' '+'to pigDice!'); 
	}
	else{
		result.push('Please retype your name and try again!');
	}

return result;
}


$(document).ready(function(){
	$('#pigster2').click(function(event){
		event.preventDefault();

		//getting input from the user
		var userInput = $('#pigster1').val();
		$('#karibuSana').empty();
		var result = welcomeToPigDice(userInput);
$('#karibuSana').text(result);
	})
});

