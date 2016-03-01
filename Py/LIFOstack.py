class CWStack(object):
  def __init__(self):
    self.stack = []
  def __str__(self):
    return "Stack of size: %d" % len(self.stack)
  def isEmpty(self):
    return self.stack == []
  def push(self, elem):
    self.stack.append(elem)
  def pop(self):
    return self.stack.pop()
  def top(self):
    if not self.isEmpty():
      return self.stack[-1]
def reverse_str(str, stack):
  for c in str:
    stack.push(c)
  result = ""
  while not stack.isEmpty():
    result += stack.pop()
  return result