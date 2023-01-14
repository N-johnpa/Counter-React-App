import React from 'react'
import './Button.css'
const Button = ({ sign, incrementvalue, }) => {
    const clickHandler = () => {
        incrementvalue(sign)
    }
    return <button className={
        sign === "increment" ? "inc" :
            sign === "decrement" ? "dec" :
                sign === "Go Back to 0" ? "reset1" : ""
    } onClick={() => clickHandler(sign)}>
        <div className="inc2"></div>
        <div className="dec2"></div>
        <div className="reset2"></div>
        {sign}
    </button>
}

export default Button