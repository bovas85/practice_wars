import re
def validPhoneNumber(phoneNumber):
    p = re.compile(ur'^\(?[0-9]{3}\)\s[0-9]{3}-[0-9]{4}$')
    return bool(re.search(p, phoneNumber))
    
# shorter:

def validPhoneNumber(phoneNumber):
    import re
    return bool(re.match(r"^(\([0-9]+\))? [0-9]+-[0-9]+$", phoneNumber))