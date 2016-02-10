from random import *

player_score = 0
computer_score = 0

def hangedman(hangman): # this will create a list of "stages" of the hangman which will be called by using hangedman(letters_tried) returning graphic[0]..1..2 etc..
    graphic = [''' 
            +-------+
            |
            |
            |
            |
            |
         ==============
    ''',
    '''
            +-------+
            |       |
            |       O
            |
            |
            |
         ===============
    ''',
    '''
            +-------+
            |       |
            |       O
            |       |
            |
            |
         ===============
    ''',
    '''
            +-------+
            |       O
            |      -|
            |
            |
            |
         ===============
    ''',
    '''
            +-------+
            |       |
            |       O
            |      -|-
            |
            |
         ===============
    ''',
    '''
            +-------+
            |       |
            |       O
            |      -|-
            |      /
            |
         ===============
    ''',
    '''
            +-------+
            |       |
            |       O
            |      -|-
            |      / \\
            |
         ===============
    ''']
    
    print graphic[hangman]
    return
        
        

def start(): # this starts the game
    print "Let's play a game of Hangman!"
    while game():
        pass # this allows to end the while loop when game ends by using break 
    scores()

def game():
    dictionary = ["gnu", "kernel", "linux", "mageia", "penguin", "ubuntu", "asdasd", "ubuntweqweu", "weweqtas"]
    
    word = choice(dictionary)  # returns random item from list, tuple or string (function is part of random module)
    word_length = len(word)
    
    clue = word_length * ["_"] # creates a clue _ _ _ based on the random choice in the dictionary (example "gnu" is 3 so _ _ _)
    
    tries = 6
    letters_tried = ""         # empty for now to add letters already played once started guessing
    
    guesses = 0
    letters_right = 0 
    letters_wrong = 0          # will be used for while loop to test if game can go on and to print the "stage" of the hangedman 
    
    global computer_score, player_score # this imports in game() the global variables set above
    
    while (letters_wrong != tries) and ("".join(clue) != word):    # checks if tries are left and if the word in clue is not complete to keep playing
        letter = guess_letter()                                    # function that prompts user to type a letter of the alphabet
        if len(letter) == 1 and letter.isalpha():                  # check if user types a single letter and if it's an alphabet letter (isalpha() takes care of that)
            if letters_tried.find(letter) != -1:                   # this checks if the letter was already typed, (find() if not found returns -1
                print "you've already picked ", letter
            else:
                letters_tried = letters_tried + letter 
                first_index = word.find(letter)
                if first_index == -1:
                    letters_wrong += 1
                    print "Sorry, %s isn't what we're looking for." % letter
                else:
                    print "Congratulations! %s is correct" % letter
                    for i in range(word_length):
                        if letter == word[i]:
                            clue[i] = letter                       # this replaces a _ with the correctly guessed letter
        else:
            print "Choose another letter"
        
        hangedman(letters_wrong)            # displays hangedman graphic[0]...1..2 et
        print " ".join(clue)                # prints clue with a space between characters _ _ _ example --> g _ _ if "gnu"
        print "Guesses: %s" % letters_tried # print score
        
        if letters_wrong == tries:
            hangedman(letters_wrong)
            print "Game Over."
            print "The word was %s" % word
            computer_score += 1
            break
            
        if "".join(clue) == word:
            hangedman(letters_wrong)
            print "You Win!"
            print "The word was indeed %s" % word
            player_score += 1
            break
            
    return play_again() # restarts the game
        
def guess_letter():
    print          # empty space
    letter = raw_input("Take a guess at our myster word: ")
    letter.strip() # removes eventual spaces
    letter.lower() # python can't compare lowercase and uppercase characters as they are not the same
    print
    return letter
    
def play_again():
    answer = raw_input("Would you like to play again? y/n: ")
    answer = answer.lower()
    if answer in ("y", "yes", "of course!"):
        return answer
    else:
        print "Thank you very much for playing my game. See you next time!"
   
def scores():
    global player_score, computer_score

    print "HIGH SCORES"
    print "Player: %d" % player_score
    print "Computer: %d" % computer_score

if __name__ == "__main__":
    start()
"""
Allows for the script to be used in two ways.
Firstly, we can execute it in the command line
and it will work fine. 
Secondly, we can import
this into another Python script.
"""