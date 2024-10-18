import React, { useState, useEffect } from "react";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviews = [
        { text: "Com este e-book, aprendi a aplicar estratégias simples e práticas que duplicaram as vendas do meu site em apenas um mês!", author: "João Silva", image: require('../../assets/images/review.png') },
        { text: "O conteúdo é prático e direto ao ponto. As estratégias realmente funcionam!", author: "Maria Oliveira", image: require('../../assets/images/review.png') },
        { text: "Aprendi a aumentar as minhas vendas de forma significativa. Recomendo a todos!", author: "Pedro Santos", image: require('../../assets/images/review.png') },
        { text: "Estratégias fáceis de implementar. Amei o e-book e já estou a ver os resultados!", author: "Ana Martins", image: require('../../assets/images/review.png') },
        { text: "Com este e-book, aprendi a aplicar estratégias simples e práticas que duplicaram as vendas do meu site em apenas um mês!", author: "João Silva", image: require('../../assets/images/review.png') },
        { text: "Finalmente encontrei um guia prático e eficaz para vender online. Perfeito!", author: "Carlos Mota", image: require('../../assets/images/review.png') }
    ];

    const reviewsPerPage = 3;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000); // Alterne a cada 5 segundos
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-inner">
                {reviews
                    .slice(currentIndex * reviewsPerPage, currentIndex * reviewsPerPage + reviewsPerPage)
                    .map((review, index) => (
                        <div key={index} className="carousel-item">
                            <img src={review.image} alt={review.author} />
                            <p>{review.text}</p>
                            <span>{review.author}</span>
                        </div>
                    ))}
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default Carousel;
