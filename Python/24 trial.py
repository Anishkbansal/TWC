# imports
import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup

url = "https://weather.com/weather/today/l/31.1471,75.3412?unit=m"
html = urllib.request.urlopen(url).read()
soup = BeautifulSoup(html , 'html.parser')     # parsing means analiseing
# it makes messy stuff into beautiful

# retreive all anchor tags  (anchor tags hold the link in a page)
tags = soup('div', class_='CurrentConditions--tempHiLoValue--3T1DG')   # this gives list of all the tags in the document.
for tag in tags:
    print(tag.getText())   # href is the link. and text is text

# an anchor tag in html looks like This     <a href="https://hostname.com ">some text </a>


