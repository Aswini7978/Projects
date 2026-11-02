import { useState } from 'react'
import { Input } from './component'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom]= useState("usd")
  const [to, setTo]= useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyinfo = useCurrencyinfo(from)
  const options = Object.keys(currencyinfo)
  const swap = () =>{
    setFrom(to),
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () =>{
    setConvertedAmount(Number(amount* currencyinfo[to]))
  }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('Pic.jpg')`,
            }}
        >
            <div className="w-full flex items-center justify-center gap-8 px-10">
                <img src="Currency.jpg" alt="Trading" className='w-1/3 rounded-xl'/>
                <div className="w-2/3 max-w-2xl border border-gray-600 rounded-lg p-8 backdrop-blur-sm bg-white/30 ">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange ={(currency)=> setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange ={(currency)=> setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
