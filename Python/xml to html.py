import re

# XML data as a string
xml_data = """
<data>
    <movie>
        <title>IRON MAN</title>
        <length>126</length>
        <rating>4.7</rating>
        <production>Marvel</production>
        <genre>Science fiction</genre>
    </movie>
    <movie>
        <title>Avengers: End Game</title>
        <length>182</length>
        <rating>4.7</rating>
        <production>Marvel</production>
        <genre>SuperHero</genre>
    </movie>
    <movie>
         <title>Interstellar</title>
         <length>169</length>
         <rating>4.9</rating>
         <production>Warner Bros</production>
         <genre>Science fiction</genre>
    </movie>
    <movie>
        <title>Pirates of the Caribbean</title>
        <length>143</length>
        <rating>4.9</rating>
        <production>Disney</production>
        <genre>Fantasy</genre>
    </movie>
    <movie>
        <title>Harry Potter and the Philosopher's Stone</title>
        <length>152</length>
        <rating>4.8</rating>
        <production>Warner Bros</production>
        <genre>Fantasy</genre>
    </movie>
    <movie>
        <title>Inception</title>
        <length>148</length>
        <rating>4.8</rating>
        <production>Warner Bros</production>
        <genre>Science fiction</genre>
    </movie>
    <movie>
        <title>The Dark Knight</title>
        <length>152</length>
        <rating>4.9</rating>
        <production>Warner Bros</production>
        <genre>SuperHero</genre>
    </movie>
    <movie>
        <title>Guardians of the Galaxy</title>
        <length>121</length>
        <rating>4.7</rating>
        <production>Marvel</production>
        <genre>Science fiction</genre>
    </movie>
    <movie>
        <title>RRR</title>
        <length>187</length>
        <rating>4.8</rating>
        <production>DVV Entertainment</production>
        <genre>Action</genre>
    </movie>
    <movie>
        <title>Star Wars: The Force Awakens</title>
        <length>138</length>
        <rating>4.7</rating>
        <production>Disney</production>
        <genre>Science fiction</genre>
    </movie>
    <movie>
        <title>Avatar</title>
        <length>162</length>
        <rating>4.8</rating>
        <production>20th Century Fox</production>
        <genre>Science fiction</genre>
    </movie>
    <movie>
        <title>Baahubali: The Beginning</title>
        <length>159</length>
        <rating>4.7</rating>
        <production>Arka Media Works</production>
        <genre>Fantasy</genre>
    </movie>
    <movie>
        <title>Baahubali 2: The Conclusion</title>
        <length>171</length>
        <rating>4.8</rating>
        <production>Arka Media Works</production>
        <genre>Fantasy</genre>
    </movie>
    <movie>
        <title>3 Idiots</title>
        <length>170</length>
        <rating>4.9</rating>
        <production>Vinod Chopra Films</production>
        <genre>Comedy</genre>
    </movie>
    <!-- Add other movies in similar structure -->
</data>
"""

# Replace < with &lt; and > with &gt; using regular expressions
processed_data = re.sub(r'<', '&lt;', xml_data)
processed_data = re.sub(r'>', '&gt;', processed_data)

print(processed_data)

