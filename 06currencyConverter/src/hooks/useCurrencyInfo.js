import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    useEffect(() => {
        // API Calling
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    }, []);
}