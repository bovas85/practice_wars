import re
def disemvowel(string):
    return re.sub(r'[aeiouAEIOU]','', string)
    
# or

def disemvowel(s):
    return s.translate(None, "aeiouAEIOU") # removes right argument from s replacing with None