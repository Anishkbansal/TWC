from functools import reduce

l2 = [1,2,3,4] # yeah i dont like 16
# we will add 5 to both and multiply with each other
add5Product = lambda a,b: (a+5)*(b+5)   # a,b are variables just like x,y 
# get your calculator 
newl2 = reduce(add5Product , l2)
print(newl2)    # OUTPUT: 