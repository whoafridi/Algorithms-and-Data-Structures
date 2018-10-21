def partition(L, low, high):
	pivot = L[high]

	i = low - 1
	for j in range(low, high):
		if L[j] > pivot:
			i += 1
			L[i], L[j] = L[j], L[i]

	L[i+1], L[high] = L[high], L[i+1]
	return i+1


def quick_sort(L, low, high):
	if low >= high:
		return
	p = partition(L, low, high)
	p = partition(L, low, high)
	quick_sort(L, low, p-1)
	quick_sort(L, p+1, high)


if __name__ == "__main__":
  arr = [17, 13, 7 ,15 ,9 ,33, 42, 55, 6 ,73]
  n = len(arr)
  quick_sort(arr,0,n-1)
  print(arr)

