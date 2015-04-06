$(document).ready(function() {

$(window).load(function() {
$('.question').not(":first-child").hide();
});

function addShowQuestion(qname) {

$(qname).show().siblings().hide();
}



//$('.question').nextAll().hide();
//$('.question').prevAll().hide();




$('#generateButton').click(function() {

 addShowQuestion(q2);
 //addShowQuestion(q3);
});




// display = $('.question').css('display', 'block');
// 
// if ( display == 'block') {
// 
// $('.question').show();
// 
// } else {
// 
// $('.question').nextAll().hide();
// $('.question').prevAll().hide();
// }


//});





}) /// doc ready END