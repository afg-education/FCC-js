function checkCashRegister(price, cash, cid) {
  let conversion = [1,5,10,25,100,500,1000,2000,10000];
  let usable = [];
  let changeMoney = [];
  //everything in cents for calculations
  let changeDue = (cash - price)*100;
  let changable = 0;
  let result = {
    "status": "INSUFFICIENT_FUNDS",
    "change": []
  };

  let totalCash = 0;
  for(let i= 0; i < cid.length; i++) {
    totalCash += cid[i][1]*100;
  }

  canPay();

  console.log(result);
  return result;

  function canPay() {
    for(let i = 0; i < conversion.length; i++) {
      if(changeDue >= conversion[i]) {
        usable.push(conversion[i]);
      }
    }
    for(let i= 0; i < usable.length; i++) {
      changable += cid[i][1]*100;
    }
  console.log(changeDue, changable, totalCash);
    if(changeDue > changable) {
      return result;
    } else if(changeDue == changable && changeDue <= totalCash) {
      console.log("here");
      result.status = "CLOSED";
      result.change = cid;
    } else {
      let remainingDue = changeDue;
      let amount = 0;
      let x = 1;
      let y = 0
      result.status = "OPEN";
      while(remainingDue > 0 && cid[usable.length - x][1] > 0) {
        if(remainingDue >= usable[usable.length - x]) {
          console.log("rD before: " + remainingDue);
          console.log("available before: " + Math.floor(cid[usable.length - x][1] * 100));
          console.log("note value : " + usable[usable.length - x]);
          amount += usable[usable.length - x];
          console.log("collected: " + amount);
          cid[usable.length - x][1] -=  usable[usable.length - x] / 100;
          console.log("available after: " + cid[usable.length - x][1] * 100);
          remainingDue -= usable[usable.length - x];
          console.log("rD after: " + remainingDue);
          console.log(cid[usable.length - x][1] * 100 < usable[usable.length - x]);
        }
        if(cid[usable.length - x][1] * 100 < usable[usable.length - x] || remainingDue < usable[usable.length - x]) {
          if(amount != 0) {
            changeMoney.push([cid[usable.length - x][0], Math.floor(amount)/100]);
          }    
          amount = 0;
          console.log(changeMoney);
          x++;
          y++;
        }
      }
      result.change = changeMoney;
    }
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
