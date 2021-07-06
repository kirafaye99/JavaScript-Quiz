
var questions = 0;
var time;
var timeAllowed = 60;
var timePunishment = 5;

var correct = 0;
var finished = false;

var quiz = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            {optID: 1, option: "&lt;script&gt;"},
            {optID: 2, option: "&lt;js&gt;"},
            {optID: 3, option: "&lt;scripting&gt;"},
            {optID: 4, option: "&lt;javascript&gt;"},
        ],
        answer: 1,
        selected: null,
        explaination: "To insert JavaScript into HTML we use the &lt;script&gt;&lt;/script&gt; commands.",
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        options: [
            {optID: 5, option: "The &lt;body&gt; section"},
            {optID: 6, option: "Either the &lt;head&gt; section or the &lt;body&gt; section"},
            {optID: 7, option: "The &lt;head&gt; section"},
            {optID: 8, option: "The &lt;title&gt; section."}
        ],
        answer: 6,
        selected: null,
        explaination: "JavaScript can be inserted into either the &lt;head&gt; section or the &lt;body&gt; section, or can be put into both.",
    },

    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        options: [
            {optID: 9, option: '&lt;script name="xxx.js"&gt;'},
            {optID: 10, option: '&lt;script src="xxx.js"&gt;'},
            {optID: 11, option: '&lt;script href="xxx,js"&gt;'},
            {optID: 12, option: '&lt;script src:"xxx.js"&gt;'}
        ],
        answer: 10,
        selected: null,
        explaination: 'To refer to an external script file, you must use &lt;script src="xxx.js"&gt;',
    },

    {
        question: 'How do you write "Hello World" in an alert box?',
        options: [
            {optID: 13, option: 'msgBox("Hello World");'},
            {optID: 14, option: 'alert("Hello World");'},
            {optID: 15, option: 'alertBox("Hellow World");'},
            {optID: 16, option: 'msg("Hello World");'},
        ],
        answer: 14,
        selected: null,
        explaination: 'In order to put "Hello World" into an alert box you must use the command alert("Hello World");',
    },

    {
        question: "How do you create a function in JavaScript?",
        options: [
            {optID: 17, option: "fuction myFunction()"},
            {optID: 18, option: "function = myFunction()"},
            {optID: 19, option: "function:myFunction()"},
            {optID: 20, option: "myFunction()"}
        ],
        answer: 17,
        selected: null,
        explaination: "To create a function in JavaScript, you must use the syntax function myFunction() with {} surrounding what you want to be in your function.",
    },

    {
        question: "How to write an IF statement in JavaScript?",
        options: [
            {optID: 21, option: "if i = 5"},
            {optID: 22, option: "if i == 5 then"},
            {optID: 23, option: "if i = 5 then"},
            {optID: 24, option: "if (i == 5)"},
        ],
        answer: 24,
        selected: null,
        explaination: "To write and IF statement, you must start with the syntax if (if == 5) then put what you want that to do in {} after.",
    },

    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            {optID: 25, option: 'var colors = ["red", "white", "blue"]'},
            {optID: 26, option: 'var colors = 1 = ("red"), 2 = ("white"), 3 = ("blue")'},
            {optID: 27, option: 'var colors = (1:"red", 2:"white", 3:"blue"'},
            {optID: 28, option: 'var colors = "red", "white", "blue"'},
        ],
        answer: 25,
        selected: null,
        explaination: 'JavaScript arrays must be within brackets, so the correct syntax would be var colors = ["red", "white", "blue"]',
    },
];

//console.log("hi1");

function curQ(){
    return quiz[questions];
}

function populateQuestionDetails(){
    
    $("#answer-response").hide();
    $("#question-container").empty();
    document.getElementById('answers-container').innerHTML = '';
    $("#answer-response").empty();
    $("#question-container").html(curQ().question);
    
    
    
    var quesAnswers = curQ().options;
    
    for(var i = 0; i < quesAnswers.length; i++){
        //console.log(quesAnswers[i].option);
        $("#answers-container").append('<div class="answer" data-content="' + quesAnswers[i].optID + '">' + quesAnswers[i].option + '</div>');        
    }
    renderQuesControls();

}


function renderQuesControls(){
    if(questions === 0){
        $("#previousQ").hide();
        $("#nextQ").show();
    }else if(questions === quiz.length-1){
        $("#previousQ").show();
        $("#nextQ").hide();     
        //$("#finish").show();
    }else{
        $("#previousQ").show();
        $("#nextQ").show();
    }
}

function getPreviousQuestion(){
    questions--;
    populateQuestionDetails();
}

function getNextQuestion(){
    questions++;
    populateQuestionDetails();
}

function processAnswer(){
    var selectedOptID = parseInt($(this).attr("data-content"));
    var correctOptID = curQ().answer;

    if(selectedOptID === correctOptID){
        correct++;
        //console.log(correct);
        $("#answer-response").html("<h4>Correct!</h4>");  
        if(questions === quiz.length-1){
            endGame();
        }
        else
        {
            getNextQuestion();
        }

    }else{
        if(questions === quiz.length-1){
            $("#finish").show();
        }
        $("#answer-response").html("<h4>Sorry that's not right. You lost " + timePunishment + " seconds :(</h4>");
        timeAllowed -= timePunishment;
        $("#answer-response").append(curQ().explaination);
        $("#answer-response").show();
    }

    curQ().selected = selectedOptID;
    //console.log(curQ().selected);
}

$(document).ready(function(){
    $("#main-game").hide();
    $("#results-display").hide();
    $("#previousQ").hide();
    $("#nextQ").hide();
    $("#finish").hide();
});

function updateClock(){
    //console.log(finished);
    if(!finished){
        timeAllowed--;
        $("#game-timer").html(timeAllowed);
        if(timeAllowed <= 0){
            clearInterval(time);
            endGame();

        }
    }
}

//console.log("hi2");

//$("#start").on("click", meStart);
function meStart(){

    //console.log("hi");
    
    $("#splash-screen").hide();
    $("#main-game").show();

    time = setInterval(updateClock, 1000);
    questions = 0;
    populateQuestionDetails();
}

//console.log("hi3");

$(document).on("click", ".answer", processAnswer);

//$("#previousQ").on("click", getPreviousQuestion);
//$("#nextQ").on("click", getNextQuestion);
//$("#finish").on("click", endGame);

function endGame(){
    finished = true;
    $("#main-game").hide();
    processResults();
    $("#results-display").show();

    // var totalScores = localStorage.getItem("existingScores");
    // if(totalScores == null){
    //     totalScores = 1;
    // }
    // console.log("Total scores: " + totalScores);

    // var myList = localStorage.getItem("scores");
    // console.log(myList.length);
    // for(var i = 0; i < myList.length; i++){
    //     var myObj = myList[i];
        
    //     $("#result-rows").append("<tr><td>" + myObj.initials + "</td><td>" + myObj.score + "</td></tr>");
    // }
    $("#result-rows").append("<tr><td>" + localStorage.getItem("initials") + "</td><td>" + localStorage.getItem("score") + "</td></tr>");

    
}
//$("#restart").on("click", );
function restart(){
    //console.log("reload the game.");
    window.location.reload();
    finished = false;
}

function processResults(){
    // var existingScores = localStorage.getItem("existingScores");
    // if(existingScores == null){
    //     existingScores = 0;
    // }
    // var myScore = existingScores+1;



    var init = prompt("What are your initials?");
    if(init === "clear"){
        localStorage.clear();

    }
    //localStorage.setItem("initials" + myScore, initials);
    
    var total = quiz.length;
    var sc = correct + "/" + total;

    localStorage.setItem("initials", init);
    localStorage.setItem("score", sc);
    
    
    


    // var list = localStorage.getItem("scores");
    // if(list == null || list === null){
    //     list = [];
    // }
    // list.concat([{"initials":init, "score":sc}]);

    // localStorage.setItem("scores", list);


    // localStorage.setItem("score" + myScore, score);

    // localStorage.setItem("existingScores", myScore);
}


