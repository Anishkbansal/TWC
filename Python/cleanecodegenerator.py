import re

def remove_comments(code):
    pattern = r'#.*?\n|""".*?"""|\'\'\'.*?\'\'\''
    return re.sub(pattern, '', code, flags=re.DOTALL)

code = """

s1 = {1,2,3, "hello"}
s2 = {3,4,5,6,6} # i repeated 6 here but while you run the code. python will automaticallly merge the two sixes into one six
list = [45,5,8,4,5,7,8,"hello", "hello"]
s3 = set(list)
s1.add(4) 
s1.add(1)  # it already exists so it does nothing it wont create new item
s1.remove(2)


 union operator is reperesented by     |   

print(s1 | s2)  # combines both the sets without any duplication.

# intersection operator is represented by    &    (its not and symbol in python and is written as and only. )
print(s1 & s2)  # return the item which is commen in both of them.

print(s1-s2)  # removes items of s2 from s1. if any
print(s2-s1)  # removes items of s1 from s2. if any

# frozen set is one which is immutable. its like no duplicate item tuple.
s = frozenset(s1 | s2)





"""

cleaned_code = remove_comments(code)
print(cleaned_code)
