import React, { useState }from "react";

//onChange = event handler use primarily in Forms
// ex: <input> <TextArea> <select> <audio>
//Trigger a function every time the valueof the input change
function componenet () {
    const [name, setName] =useState("");
    const [quantity, setQuantity] = useState(1);
    const [command, setCommand] = useState("");
    const [payment, setPayment] = useState("");
    const [shiping, setShip] =useState("");

    function handlechange(event) {
        setName(event.target.value)
    }

    function handleQantity(event){
        setQuantity(event.target.value)
    }


    function handlecommand(event) {
        setCommand(event.target.value)
    }


    function handlepay(event) {
        setPayment(event.target.value)
    }

    function handlepayment(event){
        setShip(event.target.value)
    }
    return(
        <div>
            <input value={name} onChange={handlechange}></input>
            <p>Name:{name}</p>
            <input value={quantity} onChange={handleQantity} type="number"></input>        
            <p>Quanity:{quantity}</p>    
            <textarea value={command} onChange={handlecommand} placeholder="Enter The Instruction"/>
            <p>Comment:{command}</p>
            <select value={payment} onChange={handlepay}>
                <option value="">Select An Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard </option>
                <option value="C-Pay">G-Pay</option>
            </select>
            <p>Payment :{payment}</p>
            <label>
                <input type="radio" value="PickUp"
                       checked={shiping == "PickUp"}
                       onChange={handlepay}/>
                Pick-Up <br/>
                </label>
                <label>
                <input type="radio" value="Delivary"
                       checked={shiping == "Delivary"}
                       onChange={handlepay}/>
                    Delivery
            </label>
            <p>Shopping : {shiping}</p>
        </div>
    )
}

export default componenet;