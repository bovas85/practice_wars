def count(sequence, item):
    found = 0
    for i in sequence:
        if i == item:
            found += 1
    return found
	
count([1,2,1,1], 1) # should return 3