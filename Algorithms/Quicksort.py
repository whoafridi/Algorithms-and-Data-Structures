## A different approach 

def Quicksort(L):
  if len(L) < 2:
    return L
  else:
    pivot = L[0]
    less = [i for i in L[1:] if i <= pivot]
    greater = [i for i in L[1:] if i > pivot]

    return Quicksort(less) + [pivot] + Quicksort(greater)

if __name__ == "__main__":
  l = [0,8,4,9,2,5]
  print(Quicksort(l))
