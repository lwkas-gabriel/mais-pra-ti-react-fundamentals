import { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
}

export function PostsList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetchPosts = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) {
                throw new Error("Erro ao carregar os posts");
            }
            const data = await response.json();
            setPosts(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setError("Falha ao carregar os posts. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="container my-5 min-vh-100">
            <h1 className="text-center">Lista de Posts</h1>
            {loading ? (
                <div className="text-center my-4">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Carregando...</span>
                    </div>
                </div>
            ) : error ? (
                <div className="alert alert-danger text-center">{error}</div>
            ) : (
                <div>
                    <button
                        className="btn btn-secondary mb-4"
                        onClick={fetchPosts}
                    >
                        Recarregar Posts
                    </button>
                    <ul className="list-group">
                        {posts.map((post) => (
                            <li key={post.id} className="list-group-item">
                                <h5>{post.title}</h5>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}