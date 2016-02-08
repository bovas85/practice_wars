def remove_duplicates(dedupe):
    newlist = []
    for i in dedupe:
        if i not in newlist:
            newlist.append(i)
            print newlist
    return newlist

remove_duplicates([1,1,2,2]) # should return [1,2].

# shorter below but against requirements:

def remove_duplicates(dedupe):
    return list(set(dedupe))
	
# even shorter:

remove_duplicates = lambda dedupe: list(set(dedupe))