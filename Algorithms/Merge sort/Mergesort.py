def merge(left,right):
	result = []
	i,j = 0, 0
	while i<len(left) and j< len(right):
		if left[i] <= right[j]:
			result.append(left[i])
			i+=1
		else:
			result.append(right[j])
			j+=1

	result += left[i:]
	result += right[j:]
	return result


def mergesort(lst):
	if(len(lst) <= 1):
		return lst
	mid = int(len(lst)/2)
	left = mergesort(lst[:mid])
	right = mergesort(lst[mid:])
	return merge(left,right)

if __name__ == '__main__':  
  list3 = mergesort([14,23,45,98])
  print('The separate sorted Array L :',list3)
  list4 = mergesort([6, 33, 42, 67])
  print('The separate sorted Array L :',list4)
  
  l = merge(list3,list4)
  print('The sorted Array :',l)
