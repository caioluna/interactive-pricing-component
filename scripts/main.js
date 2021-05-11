const DOM = {
    priceAmountValue: document.getElementById("price"),
    pageViews: document.querySelector('.number-viewers'),

    choosePlan(switchPos) {
        const priceSliderValue = Number(switchPos)
        
        switch (priceSliderValue) {
            case 0:
                DOM.priceAmountValue.innerText = Utils.billingType(9).toFixed(2)
                DOM.pageViews.innerText = "25k"
                break
        
            case 25:
                DOM.priceAmountValue.innerText = Utils.billingType(12).toFixed(2)
                DOM.pageViews.innerText = "50k"
                break
        
            case 50:
                DOM.priceAmountValue.innerText = Utils.billingType(16).toFixed(2)
                DOM.pageViews.innerText = "100k"
                break
        
            case 75:
                DOM.priceAmountValue.innerText = Utils.billingType(22).toFixed(2)
                DOM.pageViews.innerText = "500k"
                break
        
            case 100:
                DOM.priceAmountValue.innerText = Utils.billingType(29).toFixed(2)
                DOM.pageViews.innerText = "1M+"
                break       
        }
    }
}

const Utils = {

    billingSwitch: document.getElementById("toggle"),

    billingType(value) {

        let realPrice = Number(value)

        if (this.billingSwitch.checked) {

            realPrice = (realPrice - (realPrice * .25)) *12
            return realPrice
        } 
        
        return realPrice

    }
}

const Run = {

    init(value) {

        DOM.choosePlan(value)

    }

}

console.log(Utils.billingType(9.00))

// pegar o valor de price-amount
// fazer conta para deduzir os 25%
// devolver o valor atualizado para o innerText