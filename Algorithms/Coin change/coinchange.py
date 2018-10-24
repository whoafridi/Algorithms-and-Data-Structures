BDT = [1000,500,100,50,20,5,2,1]
ammount  = 779
num = 0
noofcoins = 0
for i in range(len(BDT)):
  if (BDT[i] <= ammount):
    num = ammount // BDT[i]
    amount -= num*BDT[i]
    noofcoins = num + noofcoins
print('No. of Notes needed to pay 779 is :', noofcoins)
    



    
 