var questions;
var time;
var timeAllowed = 60;

var quiz = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            {optID: 1, option: "<script>"},
            {optID: 2, option: "<js>"},
            {optID: 3, option: "<scripting>"},
            {optID: 4, option: "<javascript>"},
        ],
        answer: 1,
        selected: null,
        explaination: "To insert JavaScript into HTML we use the <script></script> commands.",
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            {optID: 5, option: "The <body> section"},
            {optID: 6, option: "Either the <head> section or the <body> section"},
            {optID: 7, option: "The <head> section"},
        ],
        answer: 6,
        selected: null,
        explaination: "JavaScript can be inserted into either the <head> section or the <body> section, or can be put into both.",
    },

    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        options: [
            {optID: 8, option: '<script name="xxx.js">'},
            {optID: 9, option: '<script src="xxx.js">'},
            {optID: 10, option: '<script href="xxx,js">'},
        ],
        answer: 9,
        selected: null,
        explaination: 'To refer to an external script file, you must use <script src="xxx.js"',
    },

    {
        question: 'How do you write "Hello World" in an alert box?',
        options: [
            {optID: 11, option: 'msgBox("Hello World");'},
            {optID: 12, option: 'alert("Hello World");'},
            {optID: 13, option: 'alertBox("Hellow World");'},
            {optID: 14, option: 'msg("Hello World");'},
        ],
        answer: 12,
        selected: null,
        explaination: 'In order to put "Hello World" into an alert box you must use the command alert("Hello World");',
    },

    {
        question: "How do you create a function in JavaScript?",
        options: [
            {optID: 15, option: "fuction myFunction()"},
            {optID: 16, option: "function = myFunction()"},
            {optID: 17, option: "function:myFunction()"},
        ],
        answer: 15,
        selected: null,
        explaination: "To create a function in JavaScript, you must use the syntax function myFunction() with {} surrounding what you want to be in your function.",
    },

    {
        question: "How to write an IF statement in JavaScript?",
        options: [
            {optID: 18, option: "if i = 5"},
            {optID: 19, option: "if i == 5 then"},
            {optID: 20, option: "if i = 5 then"},
            {optID: 21, option: "if (i == 5)"},
        ],
        answer: 21,
        selected: null,
        explaination: "To write and IF statement, you must start with the syntax if (if == 5) then put what you want that to do in {} after.",
    },

    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            {optID: 22, option: 'var colors = ["red", "white", "blue"]'},
            {optID: 23, option: 'var colors = 1 = ("red"), 2 = ("white"), 3 = ("blue")'},
            {optID: 24, option: 'var colors = (1:"red", 2:"white", 3:"blue"'},
            {optID: 25, option: 'var colors = "red", "white", "blue"'},
        ],
        answer: 22,
        selected: null,
        explaination: 'JavaScript arrays must be within brackets, so the correct syntax would be var colors = ["red", "white", "blue"]',
    },
]