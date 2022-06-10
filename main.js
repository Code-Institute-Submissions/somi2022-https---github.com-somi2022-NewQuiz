function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;
    
    if ( question1 == "Biden") {
        correct++;
    }
    if ( question2 == "Putin") {
        correct++;
    }
    if ( question3 == "Loven") {
        correct++;
    }
    if ( question4 == "Tesla") {
        correct++;
    }  
    if ( question5 == "Sweden") {
        correct++;
    }
    var messages = ["You won a present!<i>Congradulation</i>.", "Just one more right, you win a present", "You are almost there." , "You can fix it." ,  "Try more!"];
    var videos = ["videoQ/Video 5.gif", "videoQ/video 4.gif", "videoQ/video 3.gif", "videoQ/video 2.gif", "videoQ/video 1.gif"];
    var range;
    if (correct <= 1){
        range = 4;
    } 
    if (correct <= 2 && correct > 1){
        range = 3;
    }
    if (correct ==3){
        range = 2;
    }
    if (correct > 3 && correct < 5) {
        range = 1;
    }
    if (correct > 4) {
        range = 0;
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("videos").src = videos[range];
    }