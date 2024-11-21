import { useState } from "react";

const images = [
    "https://via.placeholder.com/300x200?text=Imagem+1",
    "https://via.placeholder.com/300x200?text=Imagem+2",
    "https://via.placeholder.com/300x200?text=Imagem+3",
    "https://via.placeholder.com/300x200?text=Imagem+4",
    "https://via.placeholder.com/300x200?text=Imagem+5",
    "https://via.placeholder.com/300x200?text=Imagem+6",
    "https://via.placeholder.com/300x200?text=Imagem+7",
    "https://via.placeholder.com/300x200?text=Imagem+8",
];

export function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);

    function openModal(image: string, index: number) {
        setSelectedImage(image);
        setSelectedIndex(index);
    };

    function closeModal() {
        setSelectedImage(null);
        setSelectedIndex(-1);
    };

    function prevImage(){
        const prevIndex = (selectedIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
        setSelectedIndex(prevIndex);
    };

    function nextImage() {
        const nextIndex = (selectedIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    return (
        <div className="container my-5 min-vh-100">
            <h1 className="text-center">Galeria de Imagens</h1>
            <div className="d-flex justify-content-center row my-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-3">
                        <img
                            src={image}
                            alt={`Imagem ${index + 1}`}
                            className="img-fluid rounded"
                            onClick={() => openModal(image, index)}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal show" tabIndex={-1} style={{ display: "block" }} onClick={closeModal}>
                    <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Visualização da Imagem</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body text-center">
                                <img
                                    src={selectedImage}
                                    alt="Imagem Ampliada"
                                    className="img-fluid"
                                    style={{ maxHeight: "80vh", objectFit: "contain" }}
                                />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={prevImage}>
                                    Anterior
                                </button>
                                <button className="btn btn-secondary" onClick={nextImage}>
                                    Próxima
                                </button>
                                <button className="btn btn-danger" onClick={closeModal}>
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}