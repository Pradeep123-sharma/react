import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        // API Calling
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
        .then((res)=> res.json())
        .then((res)=> setData(res.rates))
        .catch((error) => console.error("Error fetching from api !"))
        console.log(data);
        return data;
    }, []);
}

export default useCurrencyInfo