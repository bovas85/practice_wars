def past(h, m, s):
    return ((h * 60) * 60000) + (m * 60000) + (s * 1000)
    
# or 

def past(h, m, s):
    return (s + (m + h * 60) * 60) * 1000