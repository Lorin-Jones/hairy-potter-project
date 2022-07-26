// Imports go first
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { makePottery } from './PotteryWheel.js'
import { PotteryList } from './PotteryList.js'




let finishedPot = makePottery("vase", "5 lbs", "14 inches")

console.log(finishedPot)


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", "1 lb", "6 inches")
console.log(mug)
let plate = makePottery("plate", "2 lbs", "12 inches")
console.log(plate)
let bowl = makePottery("bowl", "2 lbs", "8 inches")
console.log(bowl)
let gravyBoat = makePottery("Gravy Boat", "1 lb", "6 inches")
console.log(gravyBoat)
let servingDish = makePottery("Serving Dish", "4 lbs", "14 inches")
console.log(servingDish)

// Fire each piece of pottery in the kiln
export const firePottery = (potteryObj, kilnTemp) => {
    potteryObj.fired = true
    if (kilnTemp > 2200) {
        potteryObj.cracked = true;
    } else {
        potteryObj.cracked = false;
    }
        return potteryObj
}
console.log(firePottery(mug, 1800))
console.log(firePottery(bowl, 2300))
console.log(firePottery(plate, 1600))
console.log(firePottery(gravyBoat, 2400))
console.log(firePottery(servingDish, 2000))
console.log(toSellOrNotToSell(mug))
console.log(toSellOrNotToSell(bowl))
console.log(toSellOrNotToSell(plate))
console.log(toSellOrNotToSell(gravyBoat))
console.log(toSellOrNotToSell(servingDish))


let potteryHTMLString = PotteryList()

console.log(potteryHTMLString)
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list
const parentHTMLElement = document.querySelector('.potteryList')
parentHTMLElement.innerHTML = PotteryList()


//