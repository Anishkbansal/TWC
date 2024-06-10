import re

def remove_comments(code):
    pattern = r'#.*?\n|""".*?"""|\'\'\'.*?\'\'\''
    return re.sub(pattern, '', code, flags=re.DOTALL)

code = """

import sqlite3   # importing library

# Connect to the database (or create it if it doesn't exist)
conn = sqlite3.connect('28.studentdb.sqlite')    # creates if does not exists
cur = conn.cursor()  # cursor helps to execute commands

# Drop the Counts table if it already exists
cur.execute('DROP TABLE IF EXISTS Counts')    # syntax to execute sql commands
# cur is our cursor as defined above

# Create a new Counts table with columns for the student's name and count
cur.execute('''
CREATE TABLE Counts (student TEXT, count INTEGER)''')

file = "Python/28.Students.txt"      
fh = open(file)    # opening students.txt

# Process each line in the file
for line in fh:
    # if line not starts with Students:  format then skip it
    if not line.startswith('Student: '): continue      # using our format to find students. 
    parts = line.split()   # split by words  => ["Student:" , "Peepo@Twc.com"] 
    student = parts[1] # getting the students
    cur.execute('SELECT count FROM Counts WHERE student = ? ', (student,)) # this thing   (students,)  is a tuple.  its just Python syntax
    # the ? here will be replaced by tuple which contains student. the ? is a placeholder. you can have mroe than one ? . just add more values in the tuple 
    row = cur.fetchone()   # this will be the information we get from database. the row will be a list
    if row is None:  # is row does not exists, -> it will be None
        # if the row is not there, we add that row!
        cur.execute('''INSERT INTO Counts (student, count)
                VALUES (?, 1)''', (student,))
    else:
        cur.execute('UPDATE Counts SET count = count + 1 WHERE student = ?',
                    (student,))     # increase the count
        # this will count number of times a certain student comes in the file. and store it into database
    conn.commit()   # this will update things in database. it will write updated things in the disk(might take some time)


# the database is created now lets read it. 
data = 'SELECT email,count FROM Counts Order BY count'

for data in cur.execute(data):
    print(str(data[0] , data[1] )) 

cur.close() # close the cursos


"""

cleaned_code = remove_comments(code)
print(cleaned_code)
