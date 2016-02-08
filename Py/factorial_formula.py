def factorial(x):
    if x == 1 or x == 0:
        print 1
        return 1
    else:
        print x * factorial(x - 1)
        return x * factorial(x - 1)
factorial(4)