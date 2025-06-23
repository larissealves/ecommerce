import re

example  = ('2[3[a]b]')
example2 = ('3[abc]4[ab]c')
example3 = ('3aaa')
example4 = ('a[]b')
example5 = ('0[abc]')

print("==========================================================")
print('Resultado esperado para 2[3[a]b]:',2*(3*("a")+"b"))
print('Resultado esperado para 3[abc]4[ab]c:', 3*("a""b""c")+4*("a""b")+"c")
print("========================================================== \n")

def multipleReplace(in_text):
    new_string = in_text
    if "[" in in_text:
        new_string = re.sub(r"\[",  "*(", in_text)
        return multipleReplace(new_string);
    if "]" in new_string:
        new_string = re.sub(r"\]",  ")+", in_text[:-1])
        if in_text[-1] == ']':
            new_string = new_string + ')'
        else:
            new_string = new_string + in_text[-1]
    else:
        print("This string does not need to be unpacked")
        
    return new_string
        

def calcular(in_text):
    if "*" in in_text or "+" in in_text:       
        in_text = eval(re.sub(r'([a-zA-Z])', r'"\1"', in_text))
    else:
        pass
    return in_text

def testar(text):
    print("==========================================================")
    print('INPUT:', text)
    change_string =  multipleReplace(text);
    result =  calcular(change_string);
    print("Final result:", result)
    print("========================================================== \n\n")
    return result

testar(example)
testar(example2)
testar(example3)
#testar(example4)
testar(example5)
