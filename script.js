let gold = 100; 

let backpack = {
    price:  100,
    quantity: 0,
    clickValueAdded:1,
    costIncrease: 1.2
}

function getGold() {
    let clickValue = 1 + backpack.quantity * backpack.clickValueAdded
    gold += clickValue
    // gold = gold + 1
    console.log(gold, clickValue)
    draw()
}

function draw() {
document.getElementById('gold-count').innerText = gold
}

function getBackpack(){
    if (gold > backpack.price){
        backpack.quantity = backpack.quantity +1
        gold -= backpack.price
    }    
}