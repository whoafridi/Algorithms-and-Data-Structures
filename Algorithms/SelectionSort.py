# Author : Afridi
# 29-11-2018


def Selection_sort(L):
  n = len(L)
  for i in range(n-1):
    index_min = i
    for j in range(i,n):
      if L[j] < L[index_min]:
        index_min = j
    L[i],L[index_min]=L[index_min],L[i]

L = [6,2,1,0,4]
Selection_sort(L)
print('Sorted list',L)   # Sorted list [0,1,2,4,6]
