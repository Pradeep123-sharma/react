import React, {useId} from 'react'

function InputBox({
    // Since we are making a re-usable component so what user will give we'll write here.
    label,
    amount,
    onAmountChange,
    onCurrrencyChange,
    /* Yaha par hum chah rge hai ki ye currencyOptions array mei pass karo. Bhale hi json data aayega lekin hum array se hi loop through karenge. */
    currencyOptions = [],
    seLectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {

    const amountInputId = useId()

    return (
        /* Now here we have written css in paptics because we are also taking className as input from user because maybe he wants to add other css. */
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value = {amount}
                    /* Now if amount is changing and we are also checking if that fun exists or not.
                    Since event passes value in String so we are converting it into Number datatype. */
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled = {currencyDisable}
                    value = {seLectCurrency}
                    onChange={(e)=> onCurrrencyChange && onCurrrencyChange(e.target.value)}
                >
                    {/* When you are using any loops then to improve performance, use KEYS */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
