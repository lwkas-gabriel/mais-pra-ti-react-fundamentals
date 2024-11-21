import { useState } from "react";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export function ToDo() {
    const [tasks, setTasks] = useState<Task[]>([]); // Lista de tarefas
    const [taskTitle, setTaskTitle] = useState<string>(""); // Título da nova tarefa
    const [filter, setFilter] = useState<"all" | "pending">("all"); // Filtro de exibição

    // Adicionar uma nova tarefa
    function addTask() {
        if (taskTitle.trim() === "") return; // Ignorar títulos vazios
        const newTask: Task = {
            id: Date.now(), // ID único baseado no timestamp
            title: taskTitle,
            completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTaskTitle(""); // Limpar o campo de entrada
    }

    // Remover uma tarefa
    function removeTask(id: number) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }

    // Alternar o estado de conclusão de uma tarefa
    function toggleTaskCompletion(id: number) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    // Tarefas filtradas
    const filteredTasks = filter === "pending"
        ? tasks.filter((task) => !task.completed)
        : tasks;

    return (
        <div className="container min-vh-100 my-5">
            <h1 className="text-center">To-Do List</h1>
            <div className="input-group my-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite uma tarefa"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                <button className="btn btn-primary" onClick={addTask}>
                    Adicionar
                </button>
            </div>
            <div className="d-flex justify-content-between my-3">
                <span>{filteredTasks.length} tarefa(s) exibida(s)</span>
                <div>
                    <button
                        className={`btn btn-sm me-2 ${filter === "all" ? "btn-secondary" : "btn-outline-secondary"}`}
                        onClick={() => setFilter("all")}
                    >
                        Todas
                    </button>
                    <button
                        className={`btn btn-sm ${filter === "pending" ? "btn-secondary" : "btn-outline-secondary"}`}
                        onClick={() => setFilter("pending")}
                    >
                        Pendentes
                    </button>
                </div>
            </div>
            <ul className="list-group">
                {filteredTasks.map((task) => (
                    <li
                        key={task.id}
                        className={`list-group-item d-flex justify-content-between align-items-center ${
                            task.completed ? "list-group-item-success" : ""
                        }`}
                    >
                        <div>
                            <input
                                type="checkbox"
                                className="form-check-input me-2"
                                checked={task.completed}
                                onChange={() => toggleTaskCompletion(task.id)}
                            />
                            {task.title}
                        </div>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeTask(task.id)}
                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
