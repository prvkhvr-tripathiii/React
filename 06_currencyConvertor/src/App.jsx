import { useState } from 'react'
import { Input } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
//   const [maxLength, ] = useState(8);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  

  return (
    <>
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1719381565370-86f9d7a9fc34?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2000')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                    onSubmit= {(e) => {
                      e.preventDefault()
                      convert()
                    }}
                  >
                      <div className="w-full mb-1">
                          <Input
                              label = "From"
                              amount = {amount}
                              value = {amount}
                            //   maxLength = {amount.length}
                              currencyOptions = {options}
                              onCurrencyChange = {(currency) => (setFrom(currency))} 
                              selectCurrency = {from}
                              onAmountChange= {(amount) => (setAmount(amount))}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-x-2 border-white rounded-md bg-emerald-600 text-white px-2 py-0.5"
                              onClick = {swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <Input
                              label = "To"
                              amount = {convertedAmount}
                              currencyOptions = {options}
                              onCurrencyChange = {(currency) => (setTo(currency))} 
                              selectCurrency = {to}
                              amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-emerald-600 text-white px-4 py-3 rounded-lg border-b-1 border-r-1 border-white hover: bg-emerald-700">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </>
  );
}

export default App
