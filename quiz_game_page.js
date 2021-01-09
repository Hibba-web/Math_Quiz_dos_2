    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");

    player1_score = 0 ; 
    player2_score = 0 ; 

    document.getElementById("player1_name&score").innerHTML = player1_name + " : " + player1_score; 
    document.getElementById("player2_name&score").innerHTML = player2_name + " : " + player2_score;

    document.getElementById("player_question&player").innerHTML = "Question Turn : " + player1_name;
    document.getElementById("player_answer&player").innerHTML = "Answer Turn : " + player2_name;


