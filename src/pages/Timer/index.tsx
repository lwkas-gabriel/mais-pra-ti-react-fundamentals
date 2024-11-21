import { useEffect, useState } from "react";

export function Timer() {
    const [seconds, setSeconds] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(true);

    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning]);

    function pauseTimer() {
        setIsRunning(false);
    }

    function resetTimer() {
        setSeconds(0);
        setIsRunning(true);
    }

    return (
        <div className="container my-5 text-center min-vh-100">
            <h1>Temporizador</h1>
            <h2>{seconds} segundo(s)</h2>
            <div className="d-flex justify-content-center gap-3 mt-4">
                {isRunning ? (
                    <button className="btn btn-warning" onClick={pauseTimer}>
                        Pausar
                    </button>
                ) : (
                    <button className="btn btn-success" onClick={() => setIsRunning(true)}>
                        Retomar
                    </button>
                )}
                <button className="btn btn-danger" onClick={resetTimer}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
}