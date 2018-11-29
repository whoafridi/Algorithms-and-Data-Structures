// Author : Afridi

function Selection_sort(L){
	var n = L.length;
	for(i=0 ; i<n-1 ; i++){
  	    index=i
		for(j=i ; j<n ; j++){
			if (L[j] < L[index]){
			[L[j],L[index]]=[L[index],L[j]]
			}
		}
	}
}

var L = [0,6,2,1,4]
Selection_sort(L)
console.log('The sorted array',L)
