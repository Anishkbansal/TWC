
import sqlite3
import xml.etree.ElementTree as ET


conn = sqlite3.connect("30.moviesdb.sqlite")
cur = conn.cursor()
# we eed to create tables fresh everytime this program runs. so that if we want to make any changes in data like changing primary key we can do it easily by just changig this python code
cur.executescript('''
DROP TABLE IF EXISTS Production;
DROP TABLE IF EXISTS Genre;
DROP Table IF EXISTS Movie;
''')

cur.execute('''
CREATE TABLE Production (
    ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    name TEXT UNIQUE
)''')

cur.execute('''
CREATE TABLE Genre (
    ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    genre TEXT UNIQUE
)''')

cur.execute('''
CREATE TABLE Movie (
    ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    title TEXT UNIQUE,
    length INTEGER,
    rating REAL,
    playCount INTEGER,
    Production_id INTEGER,
    Genre_id INTEGER
)''')


# Parse XML and insert data
tree = ET.parse('Python/30.movies.xml')
root = tree.getroot()

for movie in root.findall('movie'):
    # retreiving data from movie
    title = movie.find('title').text
    length = int(movie.find('length').text)
    rating = float(movie.find('rating').text)
    production_name = movie.find('production').text
    genre_name = movie.find('genre').text

    # we have retreived the data for one movie now we populate the database with this

    cur.execute('''INSERT OR IGNORE INTO Production(name) VALUES (?);''' , (production_name,)) 
    # we did insert or ignore so that the value does not repeat. one production house must occur once in database. there cannot be two production houses of same name
    # so if the production already exists, it skips and if it does not it creates one.
    # why? because the name is defined as UNIQUE while creating the table. 
    # now we want to know what the id is so that we can feed that into movie.

    # so we will select this particular production row
    cur.execute(' SELECT ID FROM Production WHERE name = ?' , (production_name , ))
    production_id = cur.fetchone()[0]   # fetching the zeroeth index of the SELECTed row.


    cur.execute('''INSERT OR IGNORE INTO Genre(genre) VALUES (?); ''' , (genre_name , ))
    cur.execute('''SELECT ID FROM Genre WHERE genre = ?''' , (genre_name , ))
    genre_id = cur.fetchone()[0]

    cur.execute('''INSERT INTO Movie (title, length, rating, Production_id, Genre_id)
        VALUES (?, ?, ?, ?, ?)''', (title, length, rating, production_id, genre_id))

    conn.commit()
    # commiting it

cur.execute('''SELECT Movie.title , Genre.genre , Production.name
FROM Movie JOIN Production JOIN Genre ON Movie.genre_id = Genre.ID''') 
# you are familiar with this

l = cur.fetchall()
for row in l:
    print(row)
   # fetching everything and printing

conn.close()  # close the connection