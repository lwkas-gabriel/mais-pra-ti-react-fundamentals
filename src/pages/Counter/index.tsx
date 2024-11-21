import { useState } from "react";

export function Counter(){
    const [number, setNumber] = useState(0);

    function handleDecrement(){
        if(number == 0){
            setNumber((prevState) => prevState)
        }else{
            setNumber((prevState) => prevState - 1)
        }
    }

    function handleIncrement(){
        setNumber((prevState) => prevState + 1)
    }

    return (
        <main className="container my-4 min-vh-100">
            <h1>Bem vindo a aplicação de incremento!</h1>
            <div className="d-flex justify-content-center align-items-center gap-4">
                <button className="btn btn-primary" onClick={handleDecrement}>-</button>
                <span>{number}</span>
                <button className="btn btn-primary" onClick={handleIncrement}>+</button>   
            </div>
        </main>
    );
}