class Hello:
    def __init__(self):
        self.hello = "Hello"
        print("I am Constructor.")
    
    def speak(self):
        self.hello  = self.hello + " World!"
        print(self.hello)

    def __del__(self):
        print("i am destructed")

hel = Hello()   # now hel is an object. hel takes some space in the memory.
hel.speak()    # using speak method in the object
hel.speak()

# the del method willl be called when there are no more refrences to the object are left


# if we reassign, the destructor is called (optional)
hel = "Peepo"      # reassigning the value of hel from an object to a string "Peepo". no refrence remained of object hel.
# but we want the memory used as object back! that is why to remove the object completely from the memory, __del__ is used
# now we have the memory back and a string uses less memory than an object. so our program is memory efficient. it will use less RAM to run
print(hel)
