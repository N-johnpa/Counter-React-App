// import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import Button from './Components/Button';
function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  var c = count;
  const incrementvalue = (sign) => {

    // var c = count;
    if (sign === "increment") {
      //  if(setCount(c + 1))
      if (c < 10)
        setCount(count + 1)
    }
    else if (sign === "decrement") {
      if (c > 0) {
        setCount(count - 1)
      }
    }
    else if (sign === "Go Back to 0") {
      setCount(0)
    }
  }
  // THis is for dec

  // const decrementvalue = (sign)=>{
  //   // let c = count;
  //   if (sign === "decrement") {
  //   //  if(setCount(c + 1))
  //   if (c > 0)
  //     setCount(count - 1)
  //   }
  // }
  //   useEffect(() => {
  //     // document.title = `You Clicked ${count} times`
  //   })
  // const increment = () => {
  //   if (count < 10)
  //     setCount(count + 1)
  // }
  // const decrement = () => {
  //   if (count > 0)
  //     setCount(count - 1)
  // }
  return (
    <div>
      <div className="heading">
        Counter using React
      </div>
      <div className='countval'>
        Your Current Count is : {count}
      </div>

      {/* <h1>Counter</h1> {count} */}

      {/* <button onClick={() => increment()}>Increment</button>

      <button onClick={() => decrement()}>Decrement</button> */}
      <Button sign="increment"
        incrementvalue={incrementvalue} />
      {/* {count} */}
      <Button sign="decrement"
        incrementvalue={incrementvalue} />
      <Button sign="Go Back to 0"
        incrementvalue={incrementvalue} />
    </div>

  );

}
export default App;