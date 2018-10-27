def partition(L,low,high):
    pivot = L[high]
    i = low -1
    for j in range(low,high):
        if L[j] < pivot:
            i+=1
            L[i],L[j]=L[j],L[i]

    L[i+1],L[high]=L[high],L[i+1]
    return i+1

def Quicksort(L,low,high):
    if low>=high:
        return

    p = partition(L,low,high)

    Quicksort(L,low,p-1)
    Quicksort(L,p+1,high)

#if __name__ == "__main__":
    #l = [2,5,1,5]

    #Quicksort(l,0,len(l)-1)
    #print(l)


