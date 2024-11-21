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
        <main className="vh-100 d-flex flex-column align-items-center gap-4 m-auto justify-content-center my-4 w-75">
            <h1>Bem vindo a aplicação de incremento!</h1>
            <div className="d-flex align-items-center gap-4">
                <button className="btn btn-primary" onClick={handleDecrement}>-</button>
                <span>{number}</span>
                <button className="btn btn-primary" onClick={handleIncrement}>+</button>   
            </div>
        </main>
    );
}