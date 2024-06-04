
# Let's define a Dad class
class Dad:
    def __init__(self, name, age, favorite_food, hair_color):
        self.name = name
        self.age = age
        self.favorite_food = favorite_food
        self.hair_color = hair_color

    def teach_life_lesson(self):
        print(f"{self.name} says: Always eat your {self.favorite_food}!")

    def go_White(self):
        self.hair_color = "White"

# Now let's create a Son class that inherits from Dad
class Son(Dad):
    def __init__(self, name, age, favorite_food, hair_color, grade):   # grade is son's own trait
        # Call the __init__ method of the Dad class
        super().__init__(name, age, favorite_food, hair_color)  # super()  is used to call init of parent class
        # this code allows son to have same variables as dad
        self.grade = grade

    def play_music(self):
        print(f"{self.name} is playing music instead of studying!")

    # Override the go_White method from Dad
    def go_White(self):
        print(f"{self.name} swears he'll never go bald!")

# Create a Dad instance
Anish = Dad("Anish", 45, "Ramen", "black")
Anish.teach_life_lesson()  # Output: Anish says: Always eat your Ramen!
Anish.go_White()  # Output: Anish.hair_color becomes White

# Create a Son instance
Rohit = Son("Rohit", 12, "ice cream", "blonde", "B+")
Rohit.teach_life_lesson()  # Output: Rohit says: Always eat your ice cream!   # son inherited this method from its parent class. 
Rohit.play_music()  # Output: Rohit is playing music instead of studying!
Rohit.go_White()  # Output: Rohit swears he'll never go bald!   # this method has bee defined in son class
