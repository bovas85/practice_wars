import random

def dice(minimum, maximum):
    for x in range(minimum, maximum):
        return random.randint(minimum, maximum)
        
dice(1, 12)

# or shorter


import random

def dice(minimum, maximum):
    for x in range(minimum, maximum):
        return random.randint(minimum, maximum)