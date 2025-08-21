function verifier() {
  let questionAndAnswerMap = new Map([
                                        ["What is the capital of Canada?", "Ottawa"],
                                        ["In what century did the titanic sink?", "20th century"],
                                        ["A quelle age deviens-tu adulte?", "18 ans"]
                                    ]);
                             
    let question      = document.getElementById("question").innerText

    if (question === "QUIZ Complete")
    {
      return
    }
    
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

  let questionAndNext = new Map([
                                        ["QUIZ Complete","What is the capital of Canada?"],
                                        ["What is the capital of Canada?", "In what century did the titanic sink?"],
                                        ["In what century did the titanic sink?", "A quelle age deviens-tu adulte?"],
                                    ]);
                             
    let question = document.getElementById("question").innerText
    
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
            
            
            
