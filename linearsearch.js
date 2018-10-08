## Fun Fact with JS 
function L(l,key){ 
 
  for(i=0;i<=4;i++){
    if(l[i]==key){
      return i;
    }
  }
}
var l = [1,3,5,8,0];
key = 0;
console.log(L(l,key));  #found in index 4
