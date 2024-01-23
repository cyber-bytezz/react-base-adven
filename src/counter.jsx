
import { useState } from "react";


function counter () {

    const[count, setCount] = useState(0);

    const increment = () => {
        setCount(count +1);
    }
    const decreament = () => {
        setCount(count -1);
    }
    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter">
            <p className="disp">{count}</p>
            <button className="counter-but" onClick={increment}>Increment</button>
            <button className="counter-but" onClick={reset}>Reeset</button>
            <button className="counter-but" onClick={decreament}>Decrement</button>

        </div>
    )
}

export default counter;