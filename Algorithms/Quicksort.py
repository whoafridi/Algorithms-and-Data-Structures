## Simple program 

def partition(L, low, high):
  pivot = L[high]

  i = low - 1
  for j in range(low,high):
    if L[j] < pivot:
      i += 1
      L[i] , L[j] = L[j], L[i]

  L[i+1] , L[high] = L[high] , L[i+1] 
  return i+1

def Quicksort(L, low,high):
  if low >= high:
    return L
  p = partition(L,low,high)
  Quicksort(L,low,p-1)
  Quicksort(L,p+1,high)

if __name__ == "__main__":
  arr = [10, 7, 8, 9, 1, 5] 
  n = len(arr) 
  Quicksort(arr,0,n-1) 
  for i in range(n): 
    print ("%d" %arr[i],end=' ')
  
