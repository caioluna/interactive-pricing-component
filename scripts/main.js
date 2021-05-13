let planPrice = document.getElementById("plan-price")
let pageViews = document.querySelector(".page-views")
let planToggle = document.getElementById("plan-toggle")
let priceRange = document.getElementById("price-range")
let planType = document.querySelector(".amount small")

priceRange.addEventListener("input", setMonthPrice)
priceRange.addEventListener("input", setYearPrice)

planToggle.addEventListener("input", () => {

    if (planToggle.checked) {

        if (planType.innerText === "/ month")
        planType.innerText = "/ year"
    } else {
        planType.innerText = "/ month"    
    }
    setYearPrice()

})

function setMonthPrice() {
    
    const priceRangeValue = Number(priceRange.value)

    switch (priceRangeValue) {
        case 1:
            planPrice.innerText = "8.00"
            pageViews.innerText = "10k"
            break;

        case 2:
            planPrice.innerText = "12.00"
            pageViews.innerText = "50k"
            
            break;

        case 3:
            planPrice.innerText = "16.00"
            pageViews.innerText = "100k"
            
            break;

        case 4:
            planPrice.innerText = "24.00"
            pageViews.innerText = "500k"
            
            break;

        case 5:
            planPrice.innerText = "36.00"
            pageViews.innerText = "1M"
            
            break;
    }
}

function setYearPrice() {

    let priceRangeValue = Number(priceRange.value)

    if (priceRangeValue === 1) {
        if (planToggle.checked) {
            planPrice.innerText = ((planPrice.innerText - planPrice.innerText * 0.25) * 12).toFixed(2)
        } else {
            planPrice.innerText = "8.00"
        }
    }
    if (priceRangeValue === 2) {
        if (planToggle.checked) {
            planPrice.innerText = ((planPrice.innerText - planPrice.innerText * 0.25) * 12).toFixed(2)
        } else {
            planPrice.innerText = "12.00"
        }
    }
    if (priceRangeValue === 3) {
        if (planToggle.checked) {
            planPrice.innerText = ((planPrice.innerText - planPrice.innerText * 0.25) * 12).toFixed(2)
        } else {
            planPrice.innerText = "16.00"
        }
    }
    if (priceRangeValue === 4) {
        if (planToggle.checked) {
            planPrice.innerText = ((planPrice.innerText - planPrice.innerText * 0.25) * 12).toFixed(2)
        } else {
            planPrice.innerText = "24.00"
        }
    }
    if (priceRangeValue === 5) {
        if (planToggle.checked) {
            planPrice.innerText = ((planPrice.innerText - planPrice.innerText * 0.25) * 12).toFixed(2)
        } else {
            planPrice.innerText = "36.00"
        }
    }

}