import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://api.frankfurter.dev/v2/rates?base=${currency}`)
        .then ((res) => res.json())
        .then((data) => {
                const rates = {};

                data.forEach((item) => {
                    rates[item.quote] = item.rate;
                });

                setData(rates);
            })
            .catch((error) => {
                console.error("Error fetching currency rates:", error);
            });
        console.log(data);
    }, [currency])
    console.log(data);
    return data;
} 

export default useCurrencyInfo;