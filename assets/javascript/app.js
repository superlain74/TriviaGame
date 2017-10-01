$('#start').on('click',function(){
for (var i=0; i<questions.length; i++){
	$('#subwrapper').append('<h2>'+questions[i].question+'</h2');
	for(var j=0;j<questions[i].answers.length;j++){
		$("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
	}
	}
})

var questions = [{
	question:"Who led the NBA in minutes per game?",
	answers:["Kyle Lowry", "Andrew Wiggins", "Anthony Davis", "Lebron James"],
	correctAnswer:"Lebron James"
}, {
	question:"Who led the NBA in rebounds per game?",
	answers:["Andre Drummond", "DeAndre Jordan", "Hassan Whiteside", "Rudy Gobert"],
	correctAnswer:"Hassan Whiteside"
}, {
	question:"Who had the highest FT% of these players in the 2016-2017 season?",
	answers:["Isaiah Thomas", "CJ McCollum", "James Harden", "Steph Curry"],
	correctAnswer:"CJ McCollum"
}, {
	question:"Who led the NBA in turnovers per game?",
	answers:["John Wall", "Russell Westbrook", "LeBron James", "James Harden"],
	correctAnswer:"James Harden"
}, {
	question:"Who led the NBA in steals per game?",
	answers:["Kawhi Leonard", "John Wall", "Draymond Green", "Chris Paul"],
	correctAnswer:"Draymond Green"
}, {
	question:"Who led the NBA in fouls per game?",
	answers:["DeMarcus Cousins", "Draymond Green", "Kristaps Porzingis", "Markieff Morris"],
	correctAnswer:"DeMarcus Cousins"
}, {
	question:"How many triple doubles did LeBron James have this season?",
	answers:["13", "31", "16", "22"],
	correctAnswer:"13"
}, {
	question:"Who attempted the most FGs in the 2016-2017 season?",
	answers:["Andrew Wiggins", "Russell Westbrook", "DeMar DeRozan", "James Harden"],
	correctAnswer:"Russell Westbrook"
}, {
	question:"Which of these 4 players below had the lowest FG% this season?",
	answers:["Andrew Wiggins", "Wesley Matthews", "D'Angelo Russell", "Russell Westbrook"],
	correctAnswer:"Wesley Matthews"
}, {
	question:"Which of these 4 players had the highest assist/turnover ratio this regular season?",
	answers:["Andre Iguodala", "Chris Paul", "Jeff Teague", "Ricky Rubio"],
	correctAnswer:"Andre Iguodala"
}];

