window.onload = init;
	
	function Questions (question, answer, rightAnswer) {
		this.question = question;
		this.answer = answer;
		this.rightAnswer = rightAnswer;
	
	//get the value of the form
	
		this.yourAnswer = function() {
		//var formData = document.forms.data;
	//var answerArray = formData.elements.answers;
	//var getAnswers = answer.value;
	
			//for (var i =0; i < this.answer.length; i++) {
		 		//console.log(answer[i]);
		 		//var getAnswer = answer.[i].value;
		 		//console.log(getAnswer); 
			//}
		}
		
		
	} // Questions Object END
	
	
	//var answersLetters = [a, b, c, d];
	
	function init() {
		
		var q1 = new Questions ("What is the birds name?", ["Black Corn", "Robin Hood", "Robin Blue", "Rock Pepper"], "Robin Hood");
		var q2 = new Questions ("What name?", ["Black", "Robin", "Robin Think", "Rock"], "Robin Hood");
		var q3 = new Questions ("What the black bird name?", ["Blue", "Glen", "Justin", "Don"], "Glen");
	
	
	
		var testContent = document.getElementById("testContent");
		//var rightAnswer = document.getElementById("rightAnswer");
		
		var q1Answers = "";
		for (var i = 0; i < q1.answer.length; i++) {
			 q1Answers += '<br />' + '<input type="radio" id="'+ q1.answer[i] + '" name="q1Answers" value="'+ q1.answer[i] + '"><label for="'+ q1.answer[i] + '">'+ q1.answer[i] + '</label>' + '<br>';
		}
		
		var q2Answers = "";
		for (var i = 0; i < q2.answer.length; i++) {
			 q2Answers += '<br />' + '<input type="radio" id="'+ q2.answer[i] + '" name="q2Answers" value="'+ q2.answer[i] + '"><label for="'+ q2.answer[i] + '">'+ q2.answer[i] + '</label>' + '<br>';
		}
		
		var q3Answers = "";
		for (var i = 0; i < q3.answer.length; i++) {
			 q3Answers += '<br />' + '<input type="radio" id="'+ q3.answer[i] + '" name="q3Answers" value="'+ q3.answer[i] + '"><label for="'+ q3.answer[i] + '">'+ q3.answer[i] + '</label>' + '<br>';
		}
		
		
		testContent.innerHTML = '<h2>' + '1. ' + q1.question + '</h2>' +  q1Answers;
		testContent.innerHTML += '<br />' + '<h2>' + '2. ' + q2.question + '</h2>' +  q2Answers;
		testContent.innerHTML += '<br />'  + '<h2>' + '3. ' + q3.question + '</h2>' +  q3Answers;
		
		
		
		//q1.yourAnswer();
	
	
	//q2.yourAnswer();
	//q3.yourAnswer();
	
	
		
	}
	
	