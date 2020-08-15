var leftSlot = document.getElementById("leftSlot");
var middleSlot = document.getElementById("middleSlot");
var rightSlot = document.getElementById("rightSlot");
var spinReel = document.getElementById("spinReel");
var currentBet = document.getElementById("currentBet")
var balance = document.getElementById("balance");
balance.textContent = `$ ${1000}`

const slotVariables = [1,2,3,4,5];

function randomNum(){
  return Math.floor(Math.random() * 5 )
}
// Gets number for slots between 1-5
spinReel.addEventListener("click", ()=>{
  const previousValue = Number(balance.textContent.split(" ")[1])
  const bet = currentBet.value;
  if(previousValue >= bet){
    //^^ checks if you have enough money to bet.
    leftSlot.textContent = slotVariables[randomNum()]
    middleSlot.textContent = slotVariables[randomNum()]
    rightSlot.textContent = slotVariables[randomNum()]
    // gets the numbers that will be compared in if and else.
    if(leftSlot.textContent === middleSlot.textContent && leftSlot.textContent === rightSlot.textContent){
    //  let earnings = `Balance: $ ${previousValue + ( Number(bet) * 10 )}`
      //balance.textContent = earnings
     balance.textContent = `$ ${previousValue + ( Number(bet) * 10 )}`
    //Tried this before ^ was not displaying the "balance:" portion but works. top section displays "Balance:" but does not work.
      alert("Collect your earnings")
      // If is what happens when you win
    }else{
      balance.textContent = `$ ${previousValue - Number(bet)}`
    }
    // Else is what happens when you lose
  }
})
//was helped with my code by colleagues Ibrahim, and Andy
// decided to user .textContent instead of .innerHTML second time coding this.
