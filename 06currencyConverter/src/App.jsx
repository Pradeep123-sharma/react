import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  // States setup
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  // Using custom hook
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo) /*To yaha par humne jo bhi currency di hai hook ko to uska data return karega hook to hum us currency ki keys nikal rhe hai aur fir hum options mei denge. */

  // Making Swap functionality
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // Making functionality for Conversion
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISDxUQEhIVFhUVFRUVFxUVFRUWFRUXFxcXGBcVFRUZHSggGBolHxUVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGyslHyUuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0uLy0tLS0tLS8tLS0tLS0tLS0rLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEQQAAEEAAQDBQQIBAQDCQAAAAEAAgMRBBIhMQVBURMiYXGBMpGhwQYUI0JSsdHwYnKSokOywtJTo+EVFiQzZIKTs9P/xAAZAQACAwEAAAAAAAAAAAAAAAABAwACBAX/xAAqEQACAwACAQMDAwUBAAAAAAAAAQIDERIhMQQTQTJh8FGB8SKhscHRI//aAAwDAQACEQMRAD8A8NQhChAQhChATkAJ+VFIDY0JQlpARACVCcAiAAEtISolQS0gBKAiAAEUlSokEpFJUqgBtIpOQiQbSSk5CBBtJKT6SUoEYik6klIE0aQmlPpIQgW0YkTyE2kAjU0p9IyoBIykTyE0hAsIhCECAhCFCAhCFCAlAQApY2opAbAMUjAnNKmDbHimJC3IrFqbSnc1MIUaJowBLSWkIEBOCEoVgAlQlARACKSgJaRBolJaTqS5VMBoykUpMqXKjgNIqRlU2VGRTCciHKjKp8iOzR4k5FfKkyqzkSdmhxDyK2VJlVkxpCxDiTkVi1NyqyWJOzQ4luRXyJxj0/fJWBGpnYfWug1/M/mooA5me6IqJ7FoynkNlEW3p+/RBwLKZn0ilLIyim0lYN0jQnEJEAiIQhQg5oVjLyUUQVuJljyTIoXJ4WMHgy4ZjoE8Ra91p+JsK3M3KwM8PcOviSjCR3sNQR1v3rUoLwZXN+ShLFXoaVZzVuYkCRmf72od41qHe4Ee5ZD2qlkML1z0rkICc4JAlDRUqAlCIAATgEAJ4CJXRAE4BKAnhqskVbGhqe1icGp7WqyRRsmxnD3RZc1d5ocKIOh2utj4KuGKc2d0oYrtLeiik0uyEMSiNWBGniNHiDmVezS9mrYjThEjwBzKXZI7JX+yR2KPtg9wz+ySGJaPYpphU9sPuGcY0oiV7sVNJDHkblzZtc11W+mX0Q9sPuFDDYe3AeI/PX4WrjcC55PKzZPQKxgMPqT0BPwr/UFaniOTIASARe9bEWa328k2NazsVO17iKGI4XHsHtDuhN+/ksTEwFriCKIW7ioAHOGljp06g73t8VVxUBJAPIf27g30S7IJ+EMqm15ZkYqKwHdfz5qm5tLYkol7W3W4ur032/eizpW6rLOPya65ED2qOlaDbCrkJTQ1MhQhKFQuTR7LZ4CcmJjuj3m3oHCtzY2OnJZEYWlgGG7HQn1o0tFX1Iz3dxaNSZjpJXk6EuJ0AA3oEAbDf3qeOUtcGt0A+8dbI568locEjj+0mkYSGRitapwIAsVrfzVluJzPsMaC7vREAd0nl462NV0ow63Tlzs7454MqfChrWPDmnPq5rfu2ao9Lq9OgXPTs1XQNBJJI1O4qtbzbV1asriUOWRw6E+7kkXLrUaKG08ZlvCYFM9qSNuv75LGzYgbH7+g+ak7LqK/fklwzbcfIqeCIg7g+AN36K8cKy1EPYfxNo89f0UrcMP+Iweef/akgGhvlR+IHzU+Nma9+ZrAwad1t1oK5n19VZZmlHu4M+rAf4kZ8s/+1KIR+Jvx/RMDVLCy3AeIVlhV6vkczDk/s/DRKI1ZkaAxpFEuu7APoOleHVI4aA86/I6H5eiZiFcmRhiswYa6vmaAAtzj4D5qNrVoxWJWFoJIDaHUZQT+ZTIRQucmvA2Xh+UC7belktc2+hLdj71E3DOzZa16LTxEUZjzMLwAI8zDRFGw0g8yNeSv8Hx8MEjJXse5wj01aKcHODXe4BO9taZnbJR1LWYBgINEUU5sS6rFS4bEua8RzZ3Eh1FtOO5cdO6BbfekxH1N+SNrJGuaCLbQzGzo4O1vkDojwRReofyn9zm44NdVv47heHMLHROOYD7Qu9lp5AVqSem6kfg8IIWyCSQuJILO5Y8Top5IsP2EWUy2XOJBy1uBv10+PimxjnQmy1tprTCl4TlFntGj8ToiG+pBJG45KlPhC00fOxqCDsQeYXeytiGLcO2kLi5wERBEZJBAYTZFa9FzOIiAiAN22RzRt0BI9D/mKq4Jkp9RKXkw3YcgXW/xTREtOfEOcxrC4lrLyjpeppV8qW4I1qb+SzwrD6OdXRvnZFg+GVrlLJinBhDNhlJJAJdys3y1OiucOFQO01cHNHm4taPWnOS4J4aHPe22AAAECnOJ7uv/ALbvwV10jNKettozuLlrgyaNrm6APaTdPH323sDy9yrvwY+qvkANsdkGmpjds4nwNAeq6mCVszHYeRje1Le0YR3RprRH8otYr8vbmFtuGVzT0c4bV5ZvgpxTYYWvM/Tv9jimBoOt5swHhRsG/HUfFUMS2nHzWlxKLJI5vRxCo472r6rm2LrDtVveyKBhccoGpOg8+Sryt1U7CLKZI3VJa6HLyUErQlpSRjw9UgfhNG1dBwSRscrHPaCO7d3RFgkGtfcsaGK3ADwXUcS4d2EwilaQ4RgkAjQ5b166/ktVLx6Zb1qxm1iJWyQEsaGdvifZ3prW2RZ8XD3J7HOmY2GNrbY8dnprTtLJ6A0fVWYsLCyGBp7S8k7927khovT4qzw3DwtcTUwIaBoWfec1nT+I+5dNSeHIcUvH5+IxcfGxji6MhwLwdWVWZpcAPA3/AGrB4o4l9032W/dHIV8l3WNbhnPIyzUA0BoMfsseQPu/w1Z6rmeJ4eF0gDWy3QOrmUBV2TWyy3S6Nnp4HMOefwt/pCWPFEEHJGa6xs/Ra31ONxqNr3Vu5xDW+gAv4+irzYRoNOa5hOxsOafmsEp4dKNeorYd+V1kMoggHIK19N1K54zh7nhxFbM3yigPcAk7MsJHvGhB/VaeHiliYzFM7Md8hujCbAB1ab01GtUorAukyZAQDYALjdVsLv05e5RhitdkSSfVaHC+CPnZK9rmNELM7s7qsXVNHM+CsplXWZmFa0PGcW2xYG5HOld+rMdI4ta8M7xZQBP8IJ0vlZCm4fwmSRj5WsLmRNzONaDkL9SPirfDMJJJmfHoWMd2p0/8uiC4A7mjlodQmxmJnW/JawOAh+oSzPkqYPDRFZBcDuXNtYUcTnnb3cgrU7muBy2A0NIB3A0Bb4izp67K9wfjToBTWMPdeyy0EkO3s9RyT1NPpmZ1yim12JjeHGCLMyRj2S93YZ+6QdWmyzX3qlBKNLJBb7Lm7jnVcwmSyFxtNyq/ud9C/aedm07GMc0OlaXMDcoEbeza6QDRz3dddq9yzXyFxs/9AOQHglnIFRxvc5po0RXfIANC/S+aeYgxuas+uUnNTQ7pQ1Pmm8mxKrUTYwM2fIYIqdGwmQGi1w0DjZ9nQDU0NT61ba1+cHbUDuXm5ewSABp08AqrLy5mWwuBAbmvOBvXMet2jhz4S1/aucCGnJl1t3IHoExS+BDrzX/JIx58Vbw+I0yODqvMCBZa7a65g0LHgFi9uep96c3EP1ILtN6J081FYi0qtOrk4i4uzhsYdd52wyl99QHNoHfnzWRijI6gI35RdW1xJJ3c41ufkByVHEY4BrMkkmau/ZIANn2aO1Uq54lJ/wAR/wDW79VJWIpX6fj2jQxAe4j7EtoAaMdrX3jfMqERv/C7+kpuHxbyQDI8l1nV76AF2TRs7HQKaSYFwaJDZ2OZwo6UHAuOhvcFDd7GY08N3B4KTso3Bjta5H8Q39y0OEcKicWgyHKMznktIFjRrv5e47Xr5qvguOyRYYRjZ0QBve/tPUakKL6y541Opic3Q8svaAV4f6lfDDLm9ExOMBnjxGxbK1rq5sJr/LYWHiWGPFvYTo2dwy8zmzCx7h8FYxryGHxv8wfknfTDCGLEPle0/aNZJGQQBdssnTUe0OSrPp6aKljUf1TX5/c5n6TMqa+rWn12+SxMWdG+S2/pQ65Gm77p16946rAxLu63yWC/6mdf030RIWmiE4lQE7Jxcs2mrCMtT4hqpHs0SsGvuWXTXxLWWj6D8l1OMa8yMddkwu5i6EZzX6H9Fzrmd70H5LrsXADHC8ggFhGbeyYhQrzH9y0VSE2QNWaS4sKa9qJ7fL7Y+/b4q3hAGxyGtgP/ALG9fRVhFmwmEIrT6wNf4HZ/yKu4Nt9o2r7jjW/sOY//AEkeq6MLOjnTp7H4VkBcO1L7LXexqK7R1VZrfqsTjuFYxpLS7vCJosC8oZmOx5nL7lu4rClr2usHutII5h7wQdNtHnTwKbxHg8kkOau6WQ5XaAGQMPc8Mwca8QFjvtN/pqDleHRQuaI3Pc13aNeO6CHbDKe9oVucB+h/1mVsTpHiNxcWvDGOb1IvNYPgqnDcLE6o39yVsrSCQe8LFsPQ2uk+jXFW4WQQMk1dI97nZC4AkFoY1u5XJsux9HXr9P8A0nN/SHgWHhIYZZiWPfHYijNhuVw/xf4isj6vh6rtJ/8A4Y//ANlv8ekD35SSSC5ziKoveRYHgA1o8wVntw0fPP6UhG3rsM6O+i1wGfBRNkErJJC5ha22MGVx2dpJusSWJlnKXV/KB/qWs3DQ8+19Mif9XwvPt/8AlpkbRcqTOwWNdE1zGudkeC17RoHNIqjr46eK0hwaSLCfWWvY6OUlgJLWuaQQTma7fyBITHQYX/1H/LVvENgZGIZH4ghpJELTGAwn8TjYDvAAp0bREqejm3tDW5QbJqzy02Av4ny6av4fgXTStibVuIAsgCya1J2WrPhMOBqzExE7Ofkew+dNaR6X5KljIWxuABdeUEk1Vm9WEHVtVr5p8bDNOkq47CGKR0bqtpINGxY6HmnYjHF0LIsrQGEkENAcb/E7c7KN5vXVSY7siWCEPvKMwdRt/PLXJPjYZpVEGEP2jfPTzo18aUvCjbzGfZcKI/KvEFVZIyNSPVaPAnwunDp9A0OcSHZS8gXW3tHaxXzTYT7QiyvplWeUmcUdi0NqqAFUBROyjx00RI7MOGnezEGzZ9mthVKGfENBdkbQN6uNuroK0HxVdrxrdDQn72p6aK/uC/a+RxkStxBFgE97QgcxvR68lAZx+Fv93+5PjxQF/ZMJrmZeovZ45KKX3I4fYVzyNwkZiaIOVprkbo+dFWMVj2G/sItz96XajVVJttv4LNdiB+Bo8i/5uRlLPkEVvlGlFiRbXaChRIu2kbHy2+K1XYsOo5IjlIzuojQgUNxmOjveFy7MRWoAHkXfqrLMQTvr5k/qrRtKTp16eg4Li0Lo7kgZeW9Gurd+mjrVjDYtpfbYYay6Ux112V6nN0XLcPm7rQQNRtr0edfy9V0bntiZcLybiJPI06Ps6Ivrm/pWqHa05dsOLxfJRx2JDmn7OMUCdGu5NJ/EqX0wxDnPJNUYYgRWw+y2160myT2x96gMI8QXEAeeipfSudpne3UZQGjxoM/QoWv+lj6a/wD0X7/6KH0sLLiyODriBJAoBx1La8Fzc50C0OKu0Z4M+ZWVM7QLmXy2TOx6eGQSISUtqMlFrNprw1JI+6mN5acgrkoJ3FWAfQix8Cqra0+KyRZsksNf6uC0vzNFBvdJ7zrvbypddC4HBxOrMW9n3SCWnK7Kb18lyeGYwhpe4tGV2oF94C2ir2JoXyXR/R6XPhpYLN0XNHU0K92p9U2uQJRN7hprh4JYCcPiwSDfsvaAQdfxNA9VuNY2FvbsYx3akdkM0lmvu+1tZ9zKVLgc0IZ9UOjZmkOcfazuAc0+hC08MBh2yMcYn02oToX20E5h+E2CfFa1PEZnX2aGEj4fIx5LAwtfVZpDZY1zWkU7bumv+q5jjfEGGQtGHYW03Qvn5DwkAS8LjJeWk2QxzruzYBY0b75no/7RZC+QlkcnatcG2bLNaBPQ6LHfM3UVopu4oxwAdhYXVsXOnz+WcSZj6lW4ceZnNjEETO6GAsModl5Nzl5dz66rEDxa0cHNkaHNNOc4tuwKADefK8+p6DxK5drOpVFbpq8b+jv1eribqBqDJWvK73WXJgq3jA9Xfquk4n2kRa4t7g2N5s4oaP1I16UN1bfi4MS/JI7swxnd0GoqwD46pCmxizim1v3X/O/8nHNjaGub2YJdQBt1t15C9b2UGKwD2GnMIqr8L1F9Fr54bcAZLogUG3uLrxrMtzjWDwzYu1MrnBziaa6JxDKcKFbN2oHnl5p8JMXbxTw5TgwhaJXPaTIyMvjIOgcNASOdEg+ig+juEL8Q1xAIaSTZG5a7KaOp1CsYefCNdqZ6cHNdpHs4UTvy39FbwrsNHIztJHt7IEx21lSZrp2Zurm+PotCbM7S0xmyuimYcWDK28xYZLB66tJyqIYds8cjg5sYicS0OJ1a8Od2bTzNs0/mKXH4bDtFsnLySBlDdTfomGKONjc7XuYJGmYAtBBIOWMHrWe+l+C0wZlsRhnelsYvgckOFjxBaC2Z+Ua7gfdOulm/6VkYp7M5LAQ2zQNEgcgSmycQflykkt2ynZaYsxSSLGMm1aQ1tXlLS0g61bDRoj8lkvmA+60/1fqpJ8WT7qskkgeF7fmqTnJqkZ3En+tgf4UZ8+0+T084pm3YQ2BZJ7eh5Bstkqg5yeH+0bFEcxep5HQ7JkZCpRHTTtN1GwVyGeq6jM4n3qJuIZkcCzvaZSCQB1sc1C41fjt4+NdFA56PNleCHvmJ/ZTL8kwvKeyU23U/soaHB376KWKRRRYp7XAhxGqsxcSl/G5Wi0Ukn+fwbmCf3YyDXsnyOar9Kta0WPaWMaxuVpflkBN8zTR0H2j/ANhZGA4pL2QGc6Fx5cgHD/KVb4bii+2SSEMOU3ocpB0NepFeK3wkujm2wfeotSYbLMzDkgkyNzV+AG/ysrD+kMzH4iVzA7I57iC7fS+mn7C6OWVsLnT585GaNg0vLWjjWxy6LmOMvYXOljDmtcLAJstsgAXz2Uv+kPptct+3n7mHjH7eQVGcqxO61Ul3XJmzs1ojQhCUNNfDP0CZ180mCZYcbGlGiQCb00HP0TXnU+9Izs1b0jUhdcP8pB9+nzC3foljeyxDZTeVnecAaJbs4DxIK57BSD2eTgR5XsVPBMWNrYk6/ojEjfhnWYmciYvabIfmabtuV3eY1p9HD0XTxQQyQsfG15me86OcAGAghwDXcrO+y8+ExGUO2rS+bTrQPLwV/B4o/Zta77/3bs2RyG59aT14F72dPhnCKzd5W5iQdO6HFoHUB2S/5lgyz94+aWWfI1zOjaPq4MIvnoPgFjuxCROOmiE8NZk4sWtnFywsIEeZ0dNdbhRDqGbS9WnY6jYdFyQmoB1jUnS9RVbjlut7EfSRrsIzD9m0FpJzj2jfIrHOtt9G2u5Z2buP+lJlibG/KQDYDQ8X4OLnaDyHuS4vhrxhhiy8d9x0B1vnouPn4mHRsYGNaW3bxeZ1n73kmHiTy3LmNdLVVQFXpdG04SZO0ynL+KjV+abiZZjE2R5cWFxDSXEixvp11CZ/3um+pfUjlMd2DXeGt6FYRxPimxqFSvRoPnSs4i5oy2C3fK4Bzb6gHY+IWWZ1G6ZOVYiVpqP4m77oazxY0NP9W49Cs90qrulUee9E6MDPOzSd8ihdL4D4puJa5jix4Ic00QdwRuCqznpqiIlItnGUwsysokOuu9oCKDrsDXby6KuZx+Bv936qBz1G56uhTZZ+tgf4UR8+0+T1E/FDlGweWf5uVcuTHFX0ox75L+6Pj+qic7wSEphKgAJSByE1AI7MpGFRPoHQ2Ouyc0qJgaNfAO7prcEH01tW44CWuy1Vgb6t50b8llYKbKf1266+5aUhDe+32HGx7j3SeoK11vUZLItMdLLlGTU9T1PIBVp5f/DubzLw4fytB0r+kquwWavffy514pvEpqcAOQ2+SEp9Nlow7SM151VV51ViTS1WKwyN0REIQqFyeIm9FM4jn+wqjXKQyE77qrRdSLMU9Ur08tkO6jXz/fzWPmVqCbSiokFy6OgwfFwO69jSzk2jTeta3XOrV+XjAyhkQDfECqHPxJXLNvkp+1yir1O56eATEU5GxNjLj83fAA/7mql26qSz6AdB+ev6KEyqrRZTNDtk4TLNEicJFTgX9w0hOl7dZ3ape1R4A9w0O3SdsqPao7VFQKuwumZOhfbgCaWf2iO0V1Eo5mtxWFsUhY2RsgH3mXlPlYBVAyKuZE0vV8KORYdImF6hL03MjhRslL0wuTMyS1Yro4lMJSEpCVCDtKOuulCt+uqYhIgTAKaUFISgWBK0pqLQDhPG9WROaIBO9/sKi1ylY+irxkLcS4zFhgNanrqFnzSEkk7lOeOmyicaQlJstGKXYyY8lAnOKaktjksBCEIBBCEKEFtOa5MQoQsiUp4kVUFOzKyYCw6RJnUNpQVAEwenZ1BaUFHAaT50udQ2ltEGk2dLnUIKW0QaS50ZlFaW0QEmZGZRpUQDrRaahQAtotNQoQW0iElqBFTSUEpLQCBKRCQlAIEptoKRAI604OUVozIaHBxemPchxTCUGwpCIQhVLAhCFCAhCFCAhCFCAnBIhQg4JQhCsVFCVCEQDgUtoQiAVFpUIgFBRaEIgFtFpUKEEtFpUKEEtFoQoQS0loQgQRFoQgEQlNJQhQIiRCFUIhTUIQLCFIhCAQQhChAQhChD/9k=')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
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
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
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
