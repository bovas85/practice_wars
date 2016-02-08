def reverse(text):
    b = ""
    for a in range(1,len(text)+1):
        c = len(text) - a
        print c
        b += text[c]
        a -= 1
    return b
reverse("abcd")