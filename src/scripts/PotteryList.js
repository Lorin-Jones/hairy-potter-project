import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    let potteryHTMLString = ""
    let allPottery = usePottery()
    for (let pottery of allPottery) {
        const HTMLString = `<section class="pottery" id="pottery--${pottery.id}">
            <h2 class="pottery_shape">${pottery.shape}</h2>
            <div class="pottery_properties">
                Item weighs ${pottery.weight} and is ${pottery.size}
            </div>
            <div class="pottery_price">Price is $${pottery.price}</div>
        </section>`
        potteryHTMLString += HTMLString
    }

    return potteryHTMLString
        
}
