import React, { useState, useEffect } from "react";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [reviewsPerPage, setReviewsPerPage] = useState(3); // Definir valor inicial como 3

    const reviews = [
        { text: "“Com este e-book, aprendi a aplicar estratégias simples e práticas que duplicaram as vendas do meu site em apenas um mês!”", author: "João Silva", profession: "Consultor de Marketing", image: require('../../assets/images/joao.jpeg') },
        { text: "“O conteúdo é prático e direto ao ponto. As estratégias realmente funcionam!”", author: "Maria Oliveira", profession: "CEO Loja Online Roupa", image: require('../../assets/images/maria.jpeg') },
        { text: "“Aprendi a aumentar as minhas vendas de forma significativa. Recomendo a todos!”", author: "Pedro Santos", profession: "CEO Loja Peças Automóveis", image: require('../../assets/images/pedro.jpeg') },
        { text: "“Estratégias fáceis de implementar. Amei o e-book e já estou a ver os resultados!”", author: "Ana Martins", profession: "Freelancer", image: require('../../assets/images/ana.jpeg') },
        { text: "“Com este e-book, aprendi a aplicar estratégias simples e práticas que duplicaram as vendas do meu site em apenas um mês!”", author: "João Silva", profession: "Consultor de Marketing", image: require('../../assets/images/joao.jpeg') },
        { text: "“Finalmente encontrei um guia prático e eficaz para vender online. Perfeito!”", author: "Carlos Mota", profession: "CEO Stand Automóveis", image: require('../../assets/images/carlos.jpeg') }
    ];

    useEffect(() => {
        // Atualiza o número de reviews por página dependendo do tamanho da tela
        const updateReviewsPerPage = () => {
            if (window.innerWidth <= 768) {
                setReviewsPerPage(1); // Exibe 1 review por vez em dispositivos móveis
            } else {
                setReviewsPerPage(3); // Exibe 3 reviews por vez em telas maiores
            }
        };

        window.addEventListener('resize', updateReviewsPerPage);
        updateReviewsPerPage(); // Chama a função inicialmente para ajustar a primeira renderização

        return () => window.removeEventListener('resize', updateReviewsPerPage);
    }, []);

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 7000); // Alterne a cada 7 segundos
        return () => clearInterval(intervalId);
    }, [reviewsPerPage]);

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
                            <small className="profession">{review.profession}</small>
                        </div>
                    ))}
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default Carousel;
