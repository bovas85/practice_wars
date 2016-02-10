"""
# while loop break

while True:
    print "Please type your name."
    name = raw_input()
    if name == "your name":
	    break
print "Thank you!"
"""

"""
# while loop continue

while True:
    print "Who are you?"
    name = raw_input()
    if name != "Joe":
        continue
    print "Hello, %s. What is the password? (it is a fish.)" % name
    password = raw_input()
    if password == "swordfish":
        break
print "Access granted."
"""