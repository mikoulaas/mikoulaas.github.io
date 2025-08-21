  let countryquestionAndAnswerMap = new Map([
                                        ["What is the capital of Canada?", "Ottawa"],
                                        ["What is the capital of France?", "Paris"],
                                        ["What is the capital of Japan?", "Tokyo"]
                                    ]);


  let countryquestionAndNext = new Map([
                                        ["QUIZ Complete","What is the capital of Canada?"],
                                        ["What is the capital of Canada?", "What is the capital of France?"],
                                        ["What is the capital of France?", "What is the capital of Japan?"],
                                    ]);
                             
  let animalquestionAndAnswerMap = new Map([
                                        ["What is the biggest animal in the world?", "The blue whale"],
                                        ["What age is the oldest turtle?", "200"],
                                        ["How heavy is the heaviest gorilla?", "267kg"]
                                    ]);


  let animalquestionAndNext = new Map([
                                        ["QUIZ Complete","What is the biggest animal in the world?"],
                                        ["What is the biggest animal in the world?", "What age is the oldest turtle?"],
                                        ["What age is the oldest turtle?", "How heavy is the heaviest gorilla?"],
                                    ]);
                                  
let quizToQAndA = new Map([
                                        ["Country Quiz", countryquestionAndAnswerMap],
                                        ["Animal Quiz", animalquestionAndAnswerMap],
                                         ]);
let quizToQAndNext = new Map([
                                        ["Country Quiz", countryquestionAndNext],
                                        ["Animal Quiz", animalquestionAndNext],
                                         ]);
                     
                                                        
function verifier() 
{
                             
    let question = document.getElementById("question").innerText

    if (question === "QUIZ Complete")
    {
      return
    }
 
    let quizid = document.getElementById("quiz id").innerText;
    let questionAndAnswerMap =  quizToQAndA.get(quizid)

    let correctAnswer = questionAndAnswerMap. get(question)
    let reponseUsager = document.getElementById("reponseUsager").value.trim()

    if (correctAnswer ===  reponseUsager) {
        document.getElementById("resultat").innerHTML = "Good Job! You Got it correct!" ; 
        document.getElementById("resultat").style.color = "green";
        document.getElementById("prochain").innerHTML = "NEXT" ;
      }
      else{
        document.getElementById("resultat").innerHTML = "Ahh :( Try Again" ;
        document.getElementById("resultat").style.color = "red";
      }
}


function prochaineQuestion() {

    let question = document.getElementById("question").innerText
    
    let quizid = document.getElementById("quiz id").innerText;
    let questionAndNext = quizToQAndNext.get(quizid)


    let nextQuestion = questionAndNext. get(question)
    if (!nextQuestion)
    {
      nextQuestion = "QUIZ Complete"
       document.getElementById("prochain").innerHTML = "RESTART" ;
    }
     else{
      document.getElementById("prochain").innerHTML = "" ;
     }

    document.getElementById("question").innerText = nextQuestion
    document.getElementById("reponseUsager").value = ""
    document.getElementById("resultat").innerHTML = "" ;
    
}