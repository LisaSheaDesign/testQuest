window.onload = init;
	
	function Questions (question, answer, rightAnswer) {
		this.question = question;
		this.answer = answer;
		this.rightAnswer = rightAnswer;
		
	formData = document.forms.data;
		
	
	//creates an div for each question
	var testContent = document.getElementById("testContent");
	var rightAnswer = document.getElementById("rightAnswer");
	var div = document.createElement("div")
	div.setAttribute("class", "question")
	testContent.appendChild(div);

	
//obj for the question content
	this.createQuestion = function() {
	
	//create the question with h2
	h2 = document.createElement("h2");
	div.appendChild(h2);
	
	} // createQuestion END
	

// obj for the answer content
	this.createAnswers = function() {
	
	//create the answers with input, label
	input = document.createElement("input");
	input.setAttribute("type", "radio");
	
	label = document.createElement("label");
	
	div.appendChild(input);
	div.appendChild(label);
	
	} // createAnswers END
	
	
	
//get the answers of the form
	this.yourAnswer = function() {
		
	
			for (var i =0; i < this.answer.length; i++) {
		 		console.log(answer[i]);
		 		}
			
		} // yourAnswer END
		
		
		
		
	} // Questions Object END

	
	//var answersLetters = [a, b, c, d];

//get the value of the form
	
	
	
	
	function init() {
		
		var q1 = new Questions ("What is the birds name?", ["Black Corn", "Robin Hood", "Robin Blue", "Rock Pepper"], "Robin Hood");
		var q2 = new Questions ("What name?", ["Black", "Robin", "Robin Think", "Rock"], "Robin Hood");
		var q3 = new Questions ("What the black bird name?", ["Blue", "Glen", "Justin", "Don"], "Glen");
	
		
		q1.createQuestion();
		h2.innerHTML = q1.question;
		
		for (var i = 0; i < q1.answer.length; i++) {
		q1.createAnswers();
		input.setAttribute("name", "q1Answers");
		input.setAttribute("value", q1.answer[i]);
		input.setAttribute("id", q1.answer[i]);
		label.innerHTML = q1.answer[i];
		label.setAttribute("for", q1.answer[i]);
		}
		
		
		q1AnswersArray = formData.elements.q1Answers;
		getAnswers = q1AnswersArray.value;
		// for (var i = 0; i < q1AnswersArray.length; i++) {
// 		 		if (q1AnswersArray[i].checked) {
// 		 		getAnswers = q1AnswersArray[i].value;
// 		 		alert(getAnswers);
// 		 		}
// 			}
			
		q2.createQuestion();
		h2.innerHTML = q2.question;
		
		for (var i = 0; i < q2.answer.length; i++) {
		q2.createAnswers();
		input.setAttribute("name", "q2Answers");
		input.setAttribute("value", q2.answer[i]);
		input.setAttribute("id", q2.answer[i]);
		label.innerHTML = q2.answer[i];
		label.setAttribute("for", q2.answer[i]);
		
		}
		
		
		q3.createQuestion();
		h2.innerHTML = q3.question;
		
		for (var i = 0; i < q3.answer.length; i++) {
		q3.createAnswers();
		input.setAttribute("name", "q3Answers");
		input.setAttribute("value", q3.answer[i]);
		input.setAttribute("id", q3.answer[i]);
		label.innerHTML = q3.answer[i];
		label.setAttribute("for", q3.answer[i]);
		
		}
	
	//q1.yourAnswer();
		
	}
	
	