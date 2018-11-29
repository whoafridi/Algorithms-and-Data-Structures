// Author : Afridi
// Date : 29-11-2018

function bubble_sort(L){
	var n = L.length;
	for(i=0 ; i<n ; i++){
		for(j=0 ; j<n-i-1 ; j++){
			if (L[j] > L[j+1]){
				temp = L[j] ;
				L[j] = L[j+1] ;
				L[j+1] = temp ;
			}
		}
	}
}

var L = [0,6,2,1,4]
bubble_sort(L)
console.log('The sorted array',L)
