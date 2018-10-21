def InsertionSort(L):
  n = len(L)
  for j in range(1,n):
    key = L[j]
    i = j - 1

    while i >= 0 and L[i] > key:
      L[i+1] = L[i]
      i = i - 1
    L[i+1] = key
  
if __name__ == "__main__":
  L = [5, 2, 6, 1, 3, 4 ]
  print("The Unsorted Array: ",L)
  InsertionSort(L)
  print("The Sorted Array: ",L)
