s1 = {1,2,3, "hello"}
s2 = {3,4,5,6,6} 
list = [45,5,8,4,5,7,8,"hello", "hello"]
s3 = set(list)
s1.add(4) 
s1.add(1)  
s1.remove(2)
       
    
print(s1 | s2)  
print(s1 & s2)
print(s1-s2)  
print(s2-s1)
s = frozenset(s1 | s2)