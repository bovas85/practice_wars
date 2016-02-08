def purify(numbers):
    pure = []
    for i in numbers:
        if i % 2 == 0:
            pure.append(i)
    return pure
	
purify([1,2,3]) # should return [2].