window.onload = init;
	
function init() {
		function answerProps(qName) {
	
			input.setAttribute("name", qName.name + "Answers");
			input.setAttribute("value", qName.answer[i]);
			input.setAttribute("id", qName.answer[i]);
			label.innerHTML = qName.answer[i];
			label.setAttribute("for", qName.answer[i]);
		}
		
		var genBtn = document.getElementById("generateButton");
		genBtn.onclick = generate;
	
		var q1 = new Questions ("q1", "What instrument does Lisa play?", ["A. Banjo", "B. Piano", "C. Rhythm Guitar", "D. Spoons"], "C. Rock Guitar");
		var q2 = new Questions ("q2", "What marathon did Lisa finish?", ["A. Rock 'n' Roll", "B. Boston", "C. Tinker Bell", "D. LA Marathon"], "D. LA Marathon");
		var q3 = new Questions ("q3", "Where is Lisa from?", ["A. Memphis", "B. Riverside", "C. Nashville", "D. Reno"], "B. Memphis");
	
	//get the value of the form
	 formData = document.forms.data;	
		
	var testContent = document.getElementById("testContent");
	var sayAnswer = document.getElementById("sayAnswer");
	
	counter = document.querySelectorAll(".question").length;
	
//These are the questions		
		q1.createQuestion(q1);
			for (var i = 0; i < q1.answer.length; i++) {
		 		q1.createAnswers(q1);
		 		answerProps(q1);
			}
			
		q2.createQuestion(q2);
			for (var i = 0; i < q2.answer.length; i++) {
		 		q2.createAnswers(q2);
		 		answerProps(q2);
			}
		
		q3.createQuestion(q3);
			for (var i = 0; i < q3.answer.length; i++) {
		 		q3.createAnswers(q3);
		 		answerProps(q3);
			}

// generate btn function 
	function generate() {	
	
	allAnswersGotRight = [];
	allQuestionsAnswered = [];

// Q1 answers
			q1AnswersArray = formData.elements.q1Answers;
			q1GetAnswers = q1AnswersArray.value;

			// if (q1GetAnswers == null || q1GetAnswers == "") {
// 					alert("You miss a question, 1.");
// 					return; 
// 				}
		

				for (var i = 0; i < q1AnswersArray.length; i++) {
						if (q1AnswersArray[i].checked) {
						q1GetAnswers = q1AnswersArray[i].value;
						//sayAnswer.innerHTML = 'This is your '  + '"' + q1GetAnswers + '"';
						//sayAnswer.innerHTML += 'The right answer is '  + '"' + q1.rightAnswer + '"';
						allQuestionsAnswered.push(q1.name);
						}
					}
		

				if (q1GetAnswers == q1.rightAnswer) {
					//alert('Yes! The Right Answer');
					allAnswersGotRight.push(q1.rightAnswer);
					
			} else {
				//alert('No! Wrong Answer');
				}

// Q1 answers END	
// Q2 answers 

			q2AnswersArray = formData.elements.q2Answers;
			q2GetAnswers = q2AnswersArray.value;

				for (var i = 0; i < q2AnswersArray.length; i++) {
						if (q2AnswersArray[i].checked) {
						q2GetAnswers = q2AnswersArray[i].value;
						//sayAnswer.innerHTML = 'This is your '  + '"' + q2GetAnswers + '"';
						//sayAnswer.innerHTML += 'The right answer is '  + '"' + q2.rightAnswer + '"';
						allQuestionsAnswered.push(q2.name);
						}
					}

				if (q2GetAnswers == q2.rightAnswer) {
					//alert('Yes! The Right Answer');
					allAnswersGotRight.push(q2.rightAnswer);	
			} else {
				//alert('No! Wrong Answer');
				}

// Q2 answers END
// Q3 answers
			q3AnswersArray = formData.elements.q3Answers;
			q3GetAnswers = q3AnswersArray.value;

				for (var i = 0; i < q3AnswersArray.length; i++) {
						if (q3AnswersArray[i].checked) {
						q3GetAnswers = q3AnswersArray[i].value;
						//sayAnswer.innerHTML = 'This is your '  + '"' + q3GetAnswers + '"';
						//sayAnswer.innerHTML += 'The right answer is '  + '"' + q3.rightAnswer + '"';
						allQuestionsAnswered.push(q3.name);
						}
					}

				if (q3GetAnswers == q3.rightAnswer) {
					//alert('Yes! The Right Answer');
					allAnswersGotRight.push(q3.rightAnswer);
			} else {
				//alert('No! Wrong Answer');
				} 

// Q3 answers END


// Keep count of questions answered and right answers			
	counterAllRightAnswers = allAnswersGotRight.length;
	counterallQuestions = allQuestionsAnswered.length;
	
	testContent.innerHTML = 'Here are your result: ' + '<strong>Questions Answered:</strong> ' + counterallQuestions + ' / ' + '<strong>Right Answers:</strong> ' + counterAllRightAnswers + '<br /><br />' + '<input type="button" id="clearButton" value="Try Again">';
	
	genBtn = document.getElementById('generateButton');
	
	genBtn.setAttribute('class','hide');

	clearBtn = document.getElementById("clearButton");
	clearBtn.onclick = clearForm;
		
		if (counterAllRightAnswers >= 2) {
			sayAnswer.innerHTML = 'You Passed!' + '<br /><br />';
		} else {
			sayAnswer.innerHTML = 'You FAILED!' + '<br /><br />';
		}
			
			

			
			
	} // generate END

//clear the form to start over
function clearForm() {
	location.reload();
}
				
} // init END
	
	
//obj constructor for questions	
	function Questions (name, question, answer, rightAnswer) {
		this.name = name;
		this.question = question;
		this.answer = answer;
		this.rightAnswer = rightAnswer;
	
	//sayAnswer.innerHTML += 'The right answer is '  + '"' + rightAnswer + '"';

//creates an div for each question
	var div = document.createElement("div");
	testContent.appendChild(div);	
	div.setAttribute("id", name);
	div.setAttribute("class", "question");
	
//obj for the question content
	this.createQuestion = function(qName) {
	
	//create the question with h2
	h2 = document.createElement("h2");
	div.appendChild(h2);
	
	//creates title with question
	h2.innerHTML = qName.question;
	
	} // createQuestion END
	

//obj for the answer content
	this.createAnswers = function() {
	
	//create the answers with input, label
	input = document.createElement("input");
	input.setAttribute("type", "radio");
	
	label = document.createElement("label");
	
	div.appendChild(input);
	div.appendChild(label);
	
	} // createAnswers END
	
	
	
//get the answers of the form
	this.eachQuestionAnswer = function() {
		console.log('this is your ' + rightAnswer);
	 
			for (var i =0; i < this.answer.length; i++) {
		 		console.log(answer[i])
		 		
		 	}
			
		} // eachQuestionAnswer END
		
	} // Questions constructor Object END





	
	
	
	
	