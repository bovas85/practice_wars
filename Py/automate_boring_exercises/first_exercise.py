# this program says hello and asks for my name

print "Hello World!"
print "What is your name?" # asks for name
my_name = raw_input()
print "It is good to meet you, %s" % my_name
print "The length of your name is %d" % len(my_name)
print "What is your age?" # ask for age
my_age = raw_input()
print "You will be %d in a year" % (int(my_age) + 1)

# this below works in Python 3

"""
print('Hello world!')
print('What is your name?') # ask for their name
myName = input()
print('It is good to meet you, ' + myName)
print('The length of your name is:')
print(len(myName))
print('What is your age?') # ask for their age
myAge = input()
print('You will be ' + str(int(myAge) + 1) + ' in a year.')
"""