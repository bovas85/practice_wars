def flatten(list):
  return [item for sublist in list for item in sublist]
  
# or 

def flatten(l):
    return [i[x] for i in l for x in range(len(i))]
    
    
# or 

def flatten(lists):
    flat_list = []
    for list in lists:
        flat_list += list
    return flat_list