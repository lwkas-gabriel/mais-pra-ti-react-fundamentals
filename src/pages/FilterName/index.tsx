import { useState } from "react";

export function FilterName() {
    const [filter, setFilter] = useState<string>("");
    const names = ["Lucas", "Gabriel", "Correia", "Barros", "Teste", "Ablublu"];

    const filteredNames = names.filter((name) =>
        name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="container my-4 min-vh-100">
            <h1 className="text-center">Lista de Nomes</h1>
            <input
                type="text"
                className="form-control my-3"
                placeholder="Filtrar nomes..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul className="list-group">
                {filteredNames.length > 0 ? (
                    filteredNames.map((name, index) => (
                        <li key={index} className="list-group-item">
                            {name}
                        </li>
                    ))
                ) : (
                    <li className="list-group-item text-center text-muted">
                        Nenhum nome encontrado
                    </li>
                )}
            </ul>
        </div>
    );
}