def anti_vowel(text):
    p = []
    for c in text:
        if c not in "ueoaiUEOAI":
            p.append(c)
    return "".join(p)
    
anti_vowel("Hey there")