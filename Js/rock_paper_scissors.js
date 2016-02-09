const rps = (p1, p2) => {
    if (p1 == "scissors"){
        if (p2 == "paper") return "Player 1 won!";
        if (p2 == "rock") return "Player 2 won!";
        if (p2 == "scissors") return "Draw!";
    }
    if (p1 == "rock"){
        if (p2 == "paper") return "Player 2 won!";
        if (p2 == "scissors") return "Player 1 won!";
        if (p2 == "rock") return "Draw!";
    }
    if (p1 == "paper"){
        if (p2 == "scissors") return "Player 2 won!";
        if (p2 == "rock") return "Player 1 won!";
        if (p2 == "paper") return "Draw!";
    }
};

// shorter 

const rps = (p1, p2) => {
  if (p1 == p2){
    return "Draw!";
  }
  else if ((p1 == "scissors" && p2 == "paper") || (p1 == "paper" && p2 == "rock") || (p1 == "rock" && p2 == "scissors")){
    return "Player 1 won!";
  }

  else if ((p2 == "scissors" && p1 == "paper") || (p2 == "paper" && p1 == "rock") || (p2 == "rock" && p1 == "scissors")){
    return "Player 2 won!";
  }
};