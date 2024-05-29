# task = whenever 4rd index element comes print("fourth")
l2 = [561,44,854,1,2,7,89]
for index,value in enumerate(l2):  # enumerate will also give you index.... here index and value are variable. index/firstvariable will iterate range(0,len(l2)) and mark will hold the values.
    print(index , value)
    if(index == 4):
        print(value , "is the" , index , "th element")
        print("fourth")
# try printing print(enumerate(l2)) see what it gives.(if you dont know what that is, that is the location of the element in the memory)

# you can aslo specify the start number
for num,value in enumerate(l2, start = 1):
    print(num, value)