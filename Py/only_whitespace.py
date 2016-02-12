import re
def whitespace(string):
    return bool(re.match('^\s*$', string))
    
    
# if we want to exclude empty string use '^\s+$'

# or 

def whitespace(string):
    return not string or string.isspace()
    
    
import re

def whitespace(string):
    #your code here
    if string == '':
        return True
    else:
        return string.isspace()
        
# or 


def whitespace(string):
    if string.strip() == "":
        return True
    else:
        return False
        
# or 

def whitespace(string):
  return not (string.strip())