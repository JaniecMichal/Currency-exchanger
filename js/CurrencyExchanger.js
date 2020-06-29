{
    const FromCurrencySymbol = document.querySelector(".js-FromCurrencySymbol");

    const CheckFromCurrency = () => {
        const FromCurrency = document.querySelectorAll(".js-FromCurrency");
        for (i = 1; i <= 5; i++) {
            if (FromCurrency[i - 1].checked === true) {
                FromCurrencySymbol.value = FromCurrency[i - 1].value;
                break;
            }
        }
    };


    const ToCurrencySymbol = document.querySelector(".js-ToCurrencySymbol");

    const CheckToCurrency = () => {
        const ToCurrency = document.querySelectorAll(".js-ToCurrency");
        for (i = 1; i <= 5; i++) {
            if (ToCurrency[i - 1].checked === true) {
                ToCurrencySymbol.value = ToCurrency[i - 1].value;
                break;
            }
        }
    };


    const Rate = document.querySelector(".js-Rate")

    const SetCurrencyRate = () => {

        const EuroRate = 4.4631;
        const GBPRate = 4.8900;
        const USDRate = 3.9656;
        const CHFRate = 4.1893;
        const PLNRate = 1.00;

        if (FromCurrencySymbol.value === "EUR") {
            switch (ToCurrencySymbol.value) {
                case "EUR":
                    Rate.value = (EuroRate / EuroRate).toFixed(2);
                    break;
                case "USD":
                    Rate.value = (EuroRate / USDRate).toFixed(2);
                    break;
                case "GBP":
                    Rate.value = (EuroRate / GBPRate).toFixed(2);
                    break;
                case "CHF":
                    Rate.value = (EuroRate / CHFRate).toFixed(2);
                    break;
                case "PLN":
                    Rate.value = (EuroRate / PLNRate).toFixed(2);
                    break;
            }
        }

        if (FromCurrencySymbol.value === "USD") {
            switch (ToCurrencySymbol.value) {
                case "EUR":
                    Rate.value = (USDRate / EuroRate).toFixed(2);
                    break;
                case "USD":
                    Rate.value = (USDRate / USDRate).toFixed(2);
                    break;
                case "GBP":
                    Rate.value = (USDRate / GBPRate).toFixed(2);
                    break;
                case "CHF":
                    Rate.value = (USDRate / CHFRate).toFixed(2);
                    break;
                case "PLN":
                    Rate.value = (USDRate / PLNRate).toFixed(2);
                    break;
            }
        }

        if (FromCurrencySymbol.value === "GBP") {
            switch (ToCurrencySymbol.value) {
                case "EUR":
                    Rate.value = (GBPRate / EuroRate).toFixed(2);
                    break;
                case "USD":
                    Rate.value = (GBPRate / USDRate).toFixed(2);
                    break;
                case "GBP":
                    Rate.value = (GBPRate / GBPRate).toFixed(2);
                    break;
                case "CHF":
                    Rate.value = (GBPRate / CHFRate).toFixed(2);
                    break;
                case "PLN":
                    Rate.value = (GBPRate / PLNRate).toFixed(2);
                    break;
            }
        }

        if (FromCurrencySymbol.value === "CHF") {
            switch (ToCurrencySymbol.value) {
                case "EUR":
                    Rate.value = (CHFRate / EuroRate).toFixed(2);
                    break;
                case "USD":
                    Rate.value = (CHFRate / USDRate).toFixed(2);
                    break;
                case "GBP":
                    Rate.value = (CHFRate / GBPRate).toFixed(2);
                    break;
                case "CHF":
                    Rate.value = (CHFRate / CHFRate).toFixed(2);
                    break;
                case "PLN":
                    Rate.value = (CHFRate / PLNRate).toFixed(2);
                    break;
            }
        }

        if (FromCurrencySymbol.value === "PLN") {
            switch (ToCurrencySymbol.value) {
                case "EUR":
                    Rate.value = (PLNRate / EuroRate).toFixed(2);
                    break;
                case "USD":
                    Rate.value = (PLNRate / USDRate).toFixed(2);
                    break;
                case "GBP":
                    Rate.value = (PLNRate / GBPRate).toFixed(2);
                    break;
                case "CHF":
                    Rate.value = (PLNRate / CHFRate).toFixed(2);
                    break;
                case "PLN":
                    Rate.value = (PLNRate / PLNRate).toFixed(2);
                    break;
            }
        }

    };


    const ConvertValueOnSubmit = (event) => {
        event.preventDefault();
        const FromValue = document.querySelector(".js-FromValue");
        const ToValue = document.querySelector(".js-ToValue")
        const ValueToConvert = +FromValue.value;
        ToValue.value = ValueToConvert * Rate.value;
    };

    const init = () => {
        const form = document.querySelector(".form");

        form.addEventListener("input", CheckFromCurrency);
        form.addEventListener("input", CheckToCurrency);
        form.addEventListener("input", SetCurrencyRate);
        form.addEventListener("submit", ConvertValueOnSubmit)
    }

    init();
}




