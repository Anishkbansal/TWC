print("Peepo: Hello I am Peepo")
print("Brook: Woof Woof")
print("we can help you calculate area,shape,volume of shapes like")

shape = int(input('''tell us what shape you are working with \n
              type:
              1 for circle/sphere
              2 for rectangle/cubeoid
              3 for triangle/cone \n :'''))
task = int(input("do you want 1. area, 2.volume, 3.perimeter of the shape enter 1,2,3,according to what you want"))

if(shape==1):
    if(task==1):
        radius = float(input("please enter the radius of your circle: "))
        print(f"the area of this circle is ", 3.4*(radius**2))
    if(task==2):
        radius = float(input("please enter the radius of your circle: "))
        print(f"the volume of the sphere/3D-circle is ", (4/3)*(3.4*(radius**3)))
    if(task==3):
        radius = float(input("please enter the radius of your circle: "))
        print(f"the perimeter of the circle is ", 2*3.4*radius)
    if(task>=4):
        print("please enter a valid value")
if(shape==2):
    if(task==1):
        h = float(input("please enter height of rectangle: "))
        w = float(input("please enter width of rectangle: "))
        print("the area of the rectangle is: ", h*w)
    if(task==2):
        h = float(input("please enter height of rectangle: "))
        w = float(input("please enter width of rectangle: "))
        l = float(input("please enter length of rectangle: "))
        print("the volume of rectangle is: ", l*w*h)
    if(task==3):
        h = float(input("please enter height of rectangle: "))
        w = float(input("please enter width of rectangle: "))
        print("the perimeter of rectangle is ", 2*(h+w))
    if(task>=4):
        print("please enter a valid value")
if(shape==3):
    if(task==1):
        h = float(input("enter the height of triangle: "))
        b = float(input("enter the base of triangle: "))
        print("the areea of triangle is ", (1/2)*(b*h))
    if(task==2):
        h = float(input("enter the height of triangle/cone: "))
        r = float(input("enter radius of base of triangle/cone: "))
        print("volume of cone is ", 3.4*(r**2)*(h/3))
    if(task==3):
        a = float(input("value of side 1: "))
        b = float(input("value of side 2: "))
        c = float(input("value of side 3: "))
        print("perimeter of the triangle is ", a+b+c)
    if(task>=4):
        print("please enter a valid value")
if(shape>=4):
    print("please enter a valid value")

print("thanks for visiting Peepo will gift you in near future")

