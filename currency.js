{
    const formElement = document.querySelector(".js-container__form");
    const resultElement = document.querySelector(".js-container__result");
    const amountElement = document.querySelector(".js-form__amount");
    const currencyElement = document.querySelector(".js-form__currency");

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.56;
        const rateUSD = 3.75;
        const rateGBP = 5.24;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

        }

    };

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    });
}