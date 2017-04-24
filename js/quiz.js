var pos = 0, correct = 0;
var choice_id = "choices";
var	val = ['A', 'B', 'C'];

var questions = [
    [ "What is 10 + 4?", "12", "14", "16"],
	[ "What is 20 - 9?", "7", "13", "11"],
	[ "What is 7 x 3?", "21", "24", "25"],
	[ "What is 8 / 2?", "10", "2", "4"]
];

var answers = [val[1], val[2], val[0], val[2]];

function _(x) {
	return document.getElementById(x);
}

function getChoiceHTML(num, ch) {
	//<input type='radio' name='choices' value='A'>chA<br>;
	return "<input type='radio' name='" + choice_id + "' value='" + num + "'>" + ch + "<br>";
}

function populateChoices(id) {
	var question = questions[pos][0];
	var e = _(id);
	e.innerHTML = "<h3>"+question+"</h3>";
	// Start from one because 0 has question
	for (var i = 1; i < questions[pos].length; ++i) {
		e.innerHTML += getChoiceHTML(val[i-1], questions[pos][i]);
	}
	e.innerHTML += "<br><button onclick='checkAnswer()'>Submit Answer</button>";
}

function renderQuestion() {
	var test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	populateChoices("test");
}

function checkAnswer() {
	var choice = -1;
	var choices = document.getElementsByName(choice_id);
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == answers[pos]){
		correct++;
	}
	pos++;
	renderQuestion();
}
