import { useState } from "react";

interface Tab {
    id: string;
    label: string;
    content: JSX.Element;
}

export function Tabs() {
    const tabs: Tab[] = [
        { id: "about", label: "Sobre", content: <p>Bem-vindo à página Sobre! Aqui você encontra informações gerais.</p> },
        { id: "contact", label: "Contato", content: <p>Entre em contato conosco pelo e-mail: contato@exemplo.com.</p> },
        { id: "services", label: "Serviços", content: <p>Oferecemos uma variedade de serviços para atender às suas necessidades.</p> },
    ];

    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
    return (
        <div className="container my-5 min-vh-100">
            <h1 className="text-center">Interface de Abas</h1>
            <ul className="nav nav-tabs justify-content-center">
                {tabs.map((tab) => (
                    <li className="nav-item" key={tab.id}>
                        <button
                            className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="tab-content mt-4">
                {tabs.map((tab) =>
                    tab.id === activeTab ? (
                        <div key={tab.id} className="tab-pane active">
                            {tab.content}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
}
