import { status } from "init";
import React, {useState} from "react";

function MyComponent() {
        const [name, setName] = useState("HI--Welcome");
        const [age, setAge] = useState(0);
        const [isEmployed, setisEmployed] = useState(false)

        const updateName = () => {
            setName("Aro");
        }

        const incrementAge = () => {
            setAge(age+2);
        }
        const status = () => {
             setisEmployed(!isEmployed)
        }

        return(
            <div>
                <p>
                    Name: {name}
                </p>
                <button onClick={updateName}>
                    Set Name
                </button>
                <p>
                    Age: {age}
                </p>
                <button onClick={incrementAge}>
                    increment Age
                </button>
                <p>
                    Is Empolyed: {isEmployed ? "Yes" :"No"}
                </p>
                <button onClick={status}>
                    increment Age
                </button>




            </div>
        )
}

export default MyComponent;