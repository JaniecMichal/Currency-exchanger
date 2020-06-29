
let form = document.querySelector(".form");
let FromValue = document.querySelector(".js-FromValue");
let FromCurrencySymbol = document.querySelector(".js-FromCurrencySymbol");
let Rate = document.querySelector(".js-Rate");
let RateCurrencySymbol = document.querySelector(".js-RateCurrencySymbol");
let ToCurrencySymbol = document.querySelector(".js-ToCurrencySymbol");
let ToValue = document.querySelector(".js-ToValue")

let ToCurrencyArray = [];
let FromCurrencyArray = [];
let CurrencyRatioMap = new Map();
let EuroRate = 4.4573;
let GBPRate = 4.9328;
let USDRate = 3.9741;
let CHFRate = 4.1811;
let PLNRate = 1.0;

function Initialization(){

    InitializeToCurrencyObjects();
    InitializeFromCurrencyObjects(); 
    InitializeCurrencyRatio();  
}

function InitializeToCurrencyObjects(){
    for(let i=0;i<5;i++){
        ToCurrencyArray.push(document.querySelector(`.js-ToCurrency${i}`));
    }
}

function InitializeFromCurrencyObjects(){
    for(let i=0;i<5;i++){
        FromCurrencyArray.push(document.querySelector(`.js-FromCurrency${i}`));
    }
}

function InitializeCurrencyRatio(){
    CurrencyRatioMap = new Map([
        ["EUR",4.4573],
        ["GBP",4.9328],
        ["USD",3.9741],
        ["CHF",4.1811],
        ["PLN",1.0],
    ])
}

form.addEventListener("input", () => {

    DetermineFromCurrencyValue();
    DetermineToCurrencyValue();
    DetermineRateValue();
})

function DetermineFromCurrencyValue()
{
    for(let i=0;i<5;i++){
        if(FromCurrencyArray[i].checked==true)
        {
            FromCurrencySymbol.value=FromCurrencyArray[i].value;
        }
    }
}

function DetermineToCurrencyValue()
{
    for(let i=0;i<5;i++){
        if(ToCurrencyArray[i].checked==true)
        {
            ToCurrencySymbol.value=ToCurrencyArray[i].value;
        }
    }
}

function DetermineRateValue()
{
    Rate.value = (CurrencyRatioMap.get(FromCurrencySymbol.value)/CurrencyRatioMap.get(ToCurrencySymbol.value)).toFixed(2);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let ValueToConvert = +FromValue.value;
    ToValue.value = ValueToConvert * Rate.value;
});

window.onload=Initialization;

