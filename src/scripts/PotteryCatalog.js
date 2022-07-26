const potteryForSale = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked === false) {
        if (potteryObj.weight >= 6) {
            potteryObj.price = 40
        } else {
            potteryObj.price = 20 
        }
        potteryForSale.push(potteryObj)
    }
    else {}
    return potteryObj
}       

export const usePottery = () => {
    return potteryForSale.map(pottery => ({...pottery}))
}
    
    
    // if (potteryObj.weight >= 6 && potteryObj.cracked === false) {
    //     potteryObj.price = 40
    //     potteryForSale.push(potteryObj)
    // } else if (potteryObj.weight < 6 && potteryObj.cracked === false) { 
    //     potteryObj.price = 20
    //     potteryForSale.push(potteryObj)
    // } else if (potteryObj.cracked === true) {
    // }
    // return potteryObj

//