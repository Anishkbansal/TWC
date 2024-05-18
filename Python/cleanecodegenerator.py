import re

def remove_comments(code):
    pattern = r'#.*?\n|""".*?"""|\'\'\'.*?\'\'\''
    return re.sub(pattern, '', code, flags=re.DOTALL)

code = """

# 1.) newline   blackslash n i.e "\n"  moves the cursor to next 
# symabols and codes
# to print special character or symbols like greek letter ∅, ▰, Ⅻ, ↆ, √, ∞, ∫, ψ, Ω  etc
# the format is \CODE  replace code with code of symbol. you can search for codes online like search what is code for greek letter omega in python

print("code for \u2205 is \\u2205")
print("code for \u25AC is \\u25AC")
print("code for \u216B is \\u216B")
print("code for \u27E6 is \\u27E6")
print("code for \u221A is \\u221A")
print("code for \u221E is \\u221E")
print("code for \u222B is \\u222B")
print("code for \u03C8 is \\u03C8")
print("code for \u03A9 is \\u03A9")

# or a simple way, just go online search for symbol and copy paste it
print("the symbols are , ∅, ▰, Ⅻ, ↆ, √, ∞, ∫, ψ, Ω ")


"""

cleaned_code = remove_comments(code)
print(cleaned_code)
