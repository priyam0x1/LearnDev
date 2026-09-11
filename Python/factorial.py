n=int(input("Enter the number : "))
fact =1
for i in range(0, n+1, 1):
    if i ==0:
        continue
    fact*=i
print(fact)