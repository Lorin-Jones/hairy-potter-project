let primaryKey = 1
//the function needs to track the number of times it is invoked and return id+1...
//pass primarykey as a parameter, make id equal to primarykey plus one, return pottery, set new pottery equal to primaryKey
export let makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    let pottery = {
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: primaryKey++
    }
    return pottery
}

