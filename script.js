let gold = 100; 

let backpack = {
    price:  100,
    quantity: 0,
    clickValueAdded:1,
    costIncrease: 1.2
}
function calculateClickValue(){
    let clickValue = 1 + backpack.quantity * backpack.clickValueAdded
    return clickValue
}


function getGold() {
  let clickValue = calculateClickValue()
    gold += clickValue
    // gold = gold + calculatedClickValue 
    console.log(gold, clickValue)
    draw()
}

function draw() {
document.getElementById('gold-count').innerText = gold
document.getElementById("clickValue").innerText =
calculateClickValue()

}

function getBackpack(){
    if (gold > backpack.price){
        backpack.quantity = backpack.quantity +1
        gold -= backpack.price
        backpack.price =  backpack.price * backpack.costIncrease
        draw()
    }    

else{
    alert("you don't have enough gold!")
}
}