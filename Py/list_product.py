def product(integers):
    total = 1
    for i in integers:
        total = total * i
    return total
	
product([4, 5, 5]) # should return 100 (because 4 * 5 * 5 is 100).