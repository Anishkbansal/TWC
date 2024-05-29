import re

def remove_comments(code):
    pattern = r'#.*?\n|""".*?"""|\'\'\'.*?\'\'\''
    return re.sub(pattern, '', code, flags=re.DOTALL)

code = """

class PeepoError(Exception):
    pass # pass means skip   
                   # its not like a fucntion remember

class AuthenticationError(Exception):  # the word Exception here is not a variable. its a inbuilt python class and we are inheriting that class. (ignore this inherit path dont worry about it)
    pass

just know that we created an error AuthenticationError  just like ValueError IndexError etc

def authenticate(username, password): 
    if username == "Peepo":
        raise PeepoError("Username must not be Peepo.")
    if len(password) < 8:
        raise AuthenticationError("Password must be at least 8 characters long.")
    print("User authenticated successfully.")

try:
    authenticate('user', '12345')
except AuthenticationError as e:    # AuthenticationError as e means get the error and store it in the variable e. e is a variable can be anything.
    print(f"Authentication failed: {e}")

authenticate('Peepo', 'passowrd')  # this is not in try because if someone tries to login with Peepo we will close the program and dont let him use it again

"""

cleaned_code = remove_comments(code)
print(cleaned_code)
