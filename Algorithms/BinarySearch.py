## Fun fact in Py

def BinarySearch(L, x):
    left, right = 0, len(L)-1
    while left <= right:
        mid = (left + right)//2 
        if L[mid] == x:
            return mid       
        if L[mid] < x:
            left = mid + 1
        else:
            right = mid - 1
    return 'Not found '
    
if __name__ == "__main__":
    List1 = [1, 2, 3, 5, 6, 7, 8, 9]
    key = 9
    print(BinarySearch(List1,key))  ## key found in index 7 
