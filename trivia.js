const trivia = [
    {    
        quiz: "According to the Bible, who was swallowed by a great fish?",
            a: "Jonah",
            b: "Moses",
            c: "David",
            d: "Noah",
        correct:"a"
    },    
    
    {    
        quiz: "Which book of the Bible contains the Ten Commandments?",
            a: "Exodus",
            b: "Genesis",
            c: "Leviticus",
            d: "Deuteronomy",
        correct:"a"
    },

    {
        quiz: "Who was the first king of Israel?",
            a: "Solomon",
            b: "Saul",
            c: "David",
            d: "Samuel",
        correct:"b"
    },

    {
        quiz: "Which of the following is not one of the Gospel writers?",
            a: "Matthew",
            b: "John",
            c: "Peter",
            d: "Mark",
        correct: "c"
    },
    
    {
        quiz: "In the story of the Garden of Eden, what fruit did Adam and Eve eat?",
            a: "Apple",
            b: "Pear",
            c: "Fig",
            d: "Banana",
        correct:"a"
    },
    {
        quiz: "Who was sold into slavery by his brothers in the Bible?",
            a: "Isaac",
            b: "Joseph",
            c: "Jacob",
            d: "Ishmael",
        correct:"b"
    },
    {
        quiz: "Which of the following is not one of the Plagues of Egypt?",
            a: "Frogs",
            b: "Locusts",
            c: "Hail",
            d: "Darkness",
        correct:"a"    
    },
    {
        quiz: "How many disciples did Jesus have?",
            a: "10",
            b: "12",
            c: "15",
            d: "20",
        correct:"b"
        
    },
    {
        quiz: "Who betrayed Jesus to the authorities?",
            a: "Peter",
            b: "James",
            c: "Judas",
            d: "John",
        correct:"c"
    },
    {
        quiz: "What is the first book of the New Testament?",
            a: "Matthew",
            b: "Luke",
            c: "Romans",
            d: "Acts",
        correct: "a"
    }
      
];

const solutionEls = document.querySelectorAll('.solution');

const quiz1 = document.getElementById('quiz');

const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text'); 
const ans = document.getElementById('submit');

let next_quiz = 0;
let solution = undefined;
let score = 0;

getQuiz();

function getQuiz(){
    uncheckAnswers();
    
    const quizData = trivia[next_quiz];

    quiz1.innerText = quizData.quiz;

    a_text.innerText = quizData.a;
    b_text.innerText = quizData.b;
    c_text.innerText = quizData.c;
    d_text.innerText = quizData.d;
}

function getSelected(){
    const solutionEls = document.querySelectorAll('.solution');
    let solution = undefined;

    solutionEls.forEach((solutionEl) => {
        if(solutionEl.checked){
            solution = solutionEl.id;
        }
    });
    return solution;
}

function uncheckAnswers(){
    solutionEls.forEach((solutionEl) => {
        solutionEl.checked = false;
    });
}

ans.addEventListener('click', () => {
    //Check to see answer
    const solution = getSelected();
     
    if (solution){
        if(solution === trivia[next_quiz].correct){
            score++;
        }

        next_quiz++;

        if(next_quiz < trivia.length){
            getQuiz()
        } else {
            //SHOW RESULTS
            alert("Your score is "+score+" out of "+trivia.length);
        }
    }
});