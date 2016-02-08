def median(x):
    x = sorted(x)
    if len(x) == 1:
        return x[0]
    elif len(x) % 2 != 0:
        return float(x[(int(len(x)/2))])
    else:
        a = float(x[int(len(x)/2)])
        b = float(x[int((len(x)/2)-1)])
        return (a + b)/2
		
median([1,1,2]) # should return 1