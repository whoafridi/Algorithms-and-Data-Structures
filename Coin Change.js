function min_coins(BDT,noofcoins,amount){

for (i=0;i < BDT.length;i++){
  if (BDT[i] <= amount){
  num =  Math.floor(amount / BDT[i]);
      amount -= num*BDT[i];
      noofcoins = noofcoins + num;
  }
}
return noofcoins
}

BDT = [1000,500,100,50,20,5,2,1];
amount = 779;
noofcoins = 0;
console.log('No. of coins needed to be paid',min_coins(BDT,noofcoins,amount));
