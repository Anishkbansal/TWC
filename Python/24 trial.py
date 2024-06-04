
class Student:  # class is keyword that makes classes
    def __init__(self , name , ClassName , rollNo):    # this is method that initialise the class when creating object. it has special name __init__
        # the parameter self means the object itself  example if you create object student1.
        
        self.name = name      # this actually says student1.name = name 
        # its like for the object (self) create a variable name. anf give it value of name provided as function argument
        self.ClassName = ClassName
        self.rollNo = rollNo
    
    def student_info(self):   # this is a method
        print(f"Class : {self.ClassName} , Name : {self.name} , rollNo : {self.rollNo}")

# whenever you create an object, python runs the init function automatically, so you also have to define its parameters/arguments
student1 = Student("Rohit" , "Science" , 21)   # student1 is an object/instance
# you dont have to define self argument because it is defined as student1 automatically
student1.student_info()
print(type(student1))

student2 = Student("Anish" , "Science" , 18)  # another object that belongs to class Student
student2.student_info()
print(dir(student2))
# you can imagine this syntax as   Student.student_info(student2)  


print(type(student1.name))
print(type(student1.student_info))