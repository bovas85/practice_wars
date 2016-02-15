import re
def to_camel_case(str):
    return re.sub(r'(_|-)([a-zA-Z])', upper_repl , str)

def upper_repl(match):
     return "" + match.group(2).upper()
     
# no regex

def to_camel_case(text):
    words = text.replace('_', '-').split('-')
    return words[0] + ''.join([x.title() for x in words[1:]])
    
# other regex

from re import compile as reCompile

PATTERN = reCompile(r'(?i)[-_]([a-z])')

def to_camel_case(text):
    return PATTERN.sub(lambda m: m.group(1).upper(), text)