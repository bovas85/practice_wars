import re
def insert_dash(num):
  # r'([02468])([02468])' performs capturing matches on two even numbers
  #    that are next to each other
  # r'\1*\2' is a string consisting of the first match ([02468]) followed
  #    by an asterisk ('*') and the second match ([02468])
  # example input: 48 [A representation of what happens inside re.sub()]
  #    r'([02468])([02468])' <- 48 = r'( \1 : 4 )( \2 : 8 )'
  #    r'\1*\2' <- {\1 : 4, \2 : 8} = r'4*8'
  # This statement is much like the previous, but it matches on odd pairs
  #    of numbers
    print re.sub(r'([13579])(?=[13579])',r'\1-', str(num))
    return re.sub(r'([13579])(?=[13579])',r'\1-', str(num))
	
insert_dash(33345567899)
