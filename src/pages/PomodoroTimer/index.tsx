import { useState, useEffect } from "react";

export function PomodoroTimer() {
    const [time, setTime] = useState<number>(0);
    const [inputTime, setInputTime] = useState<number | string>("");
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [intervalId, setIntervalId] = useState<number | null>(null);

    useEffect(() => {
        if (time === 0 && isRunning) {
            alert("O tempo acabou!");
            setIsRunning(false);
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        }
    }, [time, isRunning, intervalId]);

    function startTimer() {
        const parsedTime = typeof inputTime === "number" ? inputTime : parseInt(inputTime, 10);
        if (!isNaN(parsedTime) && parsedTime > 0) {
            setTime(parsedTime);
            setIsRunning(true);

            // Inicia o intervalo
            const id = window.setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

            setIntervalId(id);
        } else {
            alert("Por favor, insira um valor válido para o tempo!");
        }
    };

    function pauseTimer() {
        setIsRunning(false);
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    function resetTimer(){
        pauseTimer();
        setTime(0);
        setInputTime("");
    };

    return (
        <div className="container my-5 text-center min-vh-100">
            <h1>Timer de Contagem Regressiva</h1>
            <div className="my-4">
                <input
                    type="number"
                    className="form-control w-50 mx-auto"
                    placeholder="Digite o tempo em segundos"
                    value={inputTime}
                    onChange={(e) =>
                        setInputTime(
                            e.target.value ? parseInt(e.target.value, 10) : ""
                        )
                    }
                    disabled={isRunning}
                />
            </div>
            <div className="my-3">
                <button
                    className="btn btn-success mx-2"
                    onClick={startTimer}
                    disabled={
                            isRunning || 
                            !inputTime || 
                            isNaN(Number(inputTime)) || 
                            Number(inputTime) <= 0
                    }
                >
                    Iniciar
                </button>
                <button
                    className="btn btn-warning mx-2"
                    onClick={pauseTimer}
                    disabled={!isRunning}
                >
                    Pausar
                </button>
                <button className="btn btn-danger mx-2" onClick={resetTimer}>
                    Reiniciar
                </button>
            </div>
            <h2 className="my-4">
                {time > 0
                    ? `${Math.floor(time / 60)
                          .toString()
                          .padStart(2, "0")}:${(time % 60)
                          .toString()
                          .padStart(2, "0")}`
                    : "00:00"}
            </h2>
        </div>
    );
}
