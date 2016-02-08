def censor(text,word):
    new = []
    text = text.split()
    for b in text:
        if word == b:
            new.append("*" * len(b))
        else:
            new.append(b)
    return " ".join(new)
    
censor("this is a test", "test")

# shorter 

def censor(text,word):
    return text.replace(word,"*"*len(word))
	
"""
.replace method syntax:

A.replace(B,C)

Let:
A = String that contains the word you want to replace.
B = Word/Sub string to be replaced.
C = Word/Sub string that will replace B.

What does "*"*len(word) do?
Example:
"a" * 3 produces "aaa"
"1" * 5 produces "11111"
"-" * 2 produces "--"

In other words it simply generates n number of asterisks based on the length of the variable word.

The text.split() approach is a crude approach however using it is fine. Remember "less is more" but don't go over board.

"""