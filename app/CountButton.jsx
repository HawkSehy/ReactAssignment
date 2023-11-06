import {useState, useEffect} from "react"

export default function CountButton(){
    let [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    }
    function handleClick2(){
        setCount(count + 2)
    }
    function rollOverCount(){
        if (count >10){
            setCount(0)
        }
    }
    useEffect(rollOverCount, [count])
    return (
        <div>
            <button onClick = {handleClick}>+1</button>
            <button onClick = {handleClick2}>+2</button>
            <div>{count}</div>
        </div>
        
    )

}
