def combine(*object):
    # Create an empty dictionary
    result_object = dict()
    
    # Now iterate over all the objects
    for obj in object:
      # for key, value in each object add it to resultant dictionary
        for key, value in obj.items():
            if(key in result_object):
                result_object[key] += value
            else:
              result_object[key] = value
                
    # return resultant dictionary
    return result_object