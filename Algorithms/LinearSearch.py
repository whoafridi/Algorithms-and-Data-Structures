### Fun fact with PY
## Define a function 

def LinearSearch(L,key):  
  for i in range(len(L)):
    if L[i] == key:
      return i
  retrun "Not Found"

if __name__ == "__main__":  ##
  list1 = [0,2,1,4,5]
  k = 5
  print(LinearSearch(list,k))  # found in index 4
