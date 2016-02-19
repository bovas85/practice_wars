import re
#you can either create a valid regex to find if a character
#is a JoJo or create a function for it.
#bonus points if you do both ;)

#Oh, and think about beginners: try to be informative and
#comment with some explanation for the sake of their learning!

regex= re.compile("jo.*\s.*jo.*|gio.*\s.*gio.*", re.I) # setting a flag to ignore lower/uppercase

def is_jojo(name):
    return bool(re.search(regex, name)) # returns a boolean result of the search instead of the result

# or

def is_jojo(name):
    if ' ' not in name:
       return False
    names = name.lower().split(' ')
    if names[0].startswith('jo') and names[-1].startswith('jo'):
       return True
    if names[0].startswith('jo') and names[-1].endswith('jo'):
       return True
    if names[0].startswith('gio') and names[-1].startswith('gio'):
       return True
    return False