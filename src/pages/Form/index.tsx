import { useState } from "react";

// Componente para exibir a mensagem de boas-vindas
interface FormProps {
    name: string;
    email: string;
    password: string;
}

const Mensagem: React.FC<FormProps> = ({ name, email, password }) => {
    return (
        <>
            <h2 className="text-center my-4">Bem-vindo, {name}!</h2>
            <p className="text-center my-4">Email: {email}</p>
            <p className="text-center my-4">Senha: {password}</p>
        </>
    )
};

export function Form() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [error, setError] = useState<string>("");

    const [submitted, setSubmitted] = useState<boolean>(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        setError("");
        setSubmitted(true);
    }

    return (
        <div className="container my-5 min-vh-100">
            <h1 className="text-center">Formulário de Cadastro</h1>

            {!submitted ? (
                <form className="mx-auto mt-4 w-50" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary w-100">
                        Enviar
                    </button>
                </form>
            ) : (
                <Mensagem name={name} email={email} password={password} />
            )}
        </div>
    );
}