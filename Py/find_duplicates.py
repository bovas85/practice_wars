import re

def double_check(strng):
  match = re.search(r'(.)\1', strng, re.I)
  if match == None: return False
  else: return True
  
double_check("aa b c")

# shorter below

import re

def double_check(str):
    return bool(re.search(r"(.)\1", str.lower()))

# or 

def double_check(strng):
    strng = strng.lower()
    for i in range(len(strng)-1):
        if strng[i] == strng[i+1]:
            return True
    else:
        return False
		
