
let form = document.querySelector(".form");
let FromCurrency = document.querySelectorAll(".js-FromCurrency");
let ToCurrency = document.querySelectorAll(".js-ToCurrency");
let FromValue = document.querySelector(".js-FromValue");
let FromCurrencySymbol = document.querySelector(".js-FromCurrencySymbol");
let Rate = document.querySelector(".js-Rate");
let RateCurrencySymbol = document.querySelector(".js-RateCurrencySymbol");
let ToCurrencySymbol = document.querySelector(".js-ToCurrencySymbol");
let ToValue = document.querySelector(".js-ToValue")
let EuroRate = 4.4573;
let GBPRate = 4.9328;
let USDRate = 3.9741;
let CHFRate = 4.1811;
let PLNRate = 1.0;

const CheckFromCurrency = () => {
    for (i = 1; i <= 5; i++) {
        if (FromCurrency[i - 1].checked === true) {
            FromCurrencySymbol.value = FromCurrency[i - 1].value;
            break;
        }
    }
}
form.addEventListener("input", CheckFromCurrency);


const CheckToCurrency = () => {
    for (i = 1; i <= 5; i++) {
        if (ToCurrency[i - 1].checked === true) {
            ToCurrencySymbol.value = ToCurrency[i - 1].value;
            break;
        }
    }
}
form.addEventListener("input", CheckToCurrency);


form.addEventListener("input", () => {


    //we inform about currency rate 
    if (FromCurrencySymbol.value == "EUR" && ToCurrencySymbol.value == "EUR") {
        Rate.value = (EuroRate / EuroRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "EUR" && ToCurrencySymbol.value == "USD") {
        Rate.value = (EuroRate / USDRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "EUR" && ToCurrencySymbol.value == "GBP") {
        Rate.value = (EuroRate / GBPRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "EUR" && ToCurrencySymbol.value == "CHF") {
        Rate.value = (EuroRate / CHFRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "EUR" && ToCurrencySymbol.value == "PLN") {
        Rate.value = (EuroRate / PLNRate).toFixed(2);
    }

    if (FromCurrencySymbol.value == "USD" && ToCurrencySymbol.value == "EUR") {
        Rate.value = (USDRate / EuroRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "USD" && ToCurrencySymbol.value == "USD") {
        Rate.value = (USDRate / USDRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "USD" && ToCurrencySymbol.value == "GBP") {
        Rate.value = (USDRate / GBPRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "USD" && ToCurrencySymbol.value == "CHF") {
        Rate.value = (USDRate / CHFRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "USD" && ToCurrencySymbol.value == "PLN") {
        Rate.value = (USDRate / PLNRate).toFixed(2);
    }

    if (FromCurrencySymbol.value == "GBP" && ToCurrencySymbol.value == "EUR") {
        Rate.value = (GBPRate / EuroRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "GBP" && ToCurrencySymbol.value == "USD") {
        Rate.value = (GBPRate / USDRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "GBP" && ToCurrencySymbol.value == "GBP") {
        Rate.value = (GBPRate / GBPRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "GBP" && ToCurrencySymbol.value == "CHF") {
        Rate.value = (GBPRate / CHFRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "GBP" && ToCurrencySymbol.value == "PLN") {
        Rate.value = (GBPRate / PLNRate).toFixed(2);
    }

    if (FromCurrencySymbol.value == "CHF" && ToCurrencySymbol.value == "EUR") {
        Rate.value = (CHFRate / EuroRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "CHF" && ToCurrencySymbol.value == "USD") {
        Rate.value = (CHFRate / USDRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "CHF" && ToCurrencySymbol.value == "GBP") {
        Rate.value = (CHFRate / GBPRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "CHF" && ToCurrencySymbol.value == "CHF") {
        Rate.value = (CHFRate / CHFRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "CHF" && ToCurrencySymbol.value == "PLN") {
        Rate.value = (CHFRate / PLNRate).toFixed(2);
    }

    if (FromCurrencySymbol.value == "PLN" && ToCurrencySymbol.value == "EUR") {
        Rate.value = (PLNRate / EuroRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "PLN" && ToCurrencySymbol.value == "USD") {
        Rate.value = (PLNRate / USDRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "PLN" && ToCurrencySymbol.value == "GBP") {
        Rate.value = (PLNRate / GBPRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "PLN" && ToCurrencySymbol.value == "CHF") {
        Rate.value = (PLNRate / CHFRate).toFixed(2);
    } else if (FromCurrencySymbol.value == "PLN" && ToCurrencySymbol.value == "PLN") {
        Rate.value = (PLNRate / PLNRate).toFixed(2);
    }

})



form.addEventListener("submit", (event) => {
    event.preventDefault();


    let ValueToConvert = +FromValue.value;
    ToValue.value = ValueToConvert * Rate.value;




});




