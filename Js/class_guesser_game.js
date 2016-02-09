/*
Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.
If the user tries to guess more than the limit the function show throw an error
If the user guess wrong it should lose a life and return false (if you guess correctly you shouldn't remove a life)
If the user guess right it should return true
Can you finish the game so all the rules are met?
//tests:
describe('Guesser', () => {
  it('Correct guess should return true', () => {
    let guesser = new Guesser(10, 2);
    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);
    Test.expect(guesser.guess(10));
  });

  it('Wrong guess should return false', () => {
    let guesser = new Guesser(10, 2);
    guesser.guess(1);
    Test.expect(!guesser.guess(1));
  });

  it('Lives ran out should throw', () => {
    let guesser = new Guesser(10, 2);
    guesser.guess(1);
    guesser.guess(2);
    
    Test.expectError('Expect error already dead', () => { guesser.guess(10); });
  });
});
*/

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  guess(n) {
    var count = 0;
    if (count < this.lives){ // check if alive
        if (n == this.number){
        count++; // counts number of tries
        return true;
        }
        if (n != this.number){ 
        this.lives--; //  
        count++;
        return false;
        }
     }  
     else {
     throw "Expect error already dead"; // throw an error if lives are 0 
     };
     }
}

// shorter

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (!this.lives) throw Error // check if lives are 0
    this.lives--
    return n === this.number // returns boolean result of comparison
  }
}