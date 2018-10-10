## Fun Fact with Javascript 

function L(l,key){ 
 
  for(i=0;i<l.length;i++){
   
    if(l[i]==key){
      return i;
     
    }
  }
}

let list = [1,3,5,8,0];
key = 0;
console.log("Search key found in index",L(list,key));   #found in index 4
