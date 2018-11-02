def min_coins(BDT,noofcoins,amount):
  
  for i in range(len(BDT)):
    if BDT[i] <= amount:
      num = amount // BDT[i]
      amount -= num*BDT[i]
      noofcoins = num + noofcoins
  return noofcoins 

if __name__ == '__main__' :
  BDT = [1000,500,100,50,20,5,2,1]
  amount  = 779
  noofcoins = 0
  print('No. of notes Needed to pay :',min_coins(BDT,noofcoins,amount))
  
