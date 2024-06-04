import os
from bs4 import BeautifulSoup

# Directory containing HTML files
directory = 'E:/Lecture Description/Python/Projects/lecture projects'

# Image tag to search for
image_tag_str = '<img src="Image resource\\Peepo_teachingPY.PNG" alt="Welcome welcome_folks peepo teaching snake on his neck" class="images"><br>'

# Function to check and remove the image tag from HTML files
def check_and_remove_image_tag(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')
    
    # Find the specific image tag
    image_tag = soup.find('img', {
        'src': 'Image resource\\Peepo_teachingPY.PNG',
        'alt': 'Welcome welcome_folks peepo teaching snake on his neck',
        'class': 'images'
    })
    
    if image_tag:
        # Confirm with the user
        print(f"File: {file_path}")
        print(f"Found image tag: {image_tag}")
        confirm = input("Do you want to remove this tag from the file? (yes/no): ").strip().lower()
        
        if confirm == 'yes':
            image_tag.decompose()  # Remove the image tag
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(str(soup))
            print(f"Image tag removed from {file_path}\n")
        else:
            print(f"No changes made to {file_path}\n")

# Iterate over HTML files in the specified directory
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        file_path = os.path.join(directory, filename)
        check_and_remove_image_tag(file_path)
