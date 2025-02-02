import React from "react";

interface OutdoorCardProps {
  link: string; // URL para onde o card deve redirecionar
  imageUrl: string; // URL da imagem a ser exibida
  altText?: string; // Texto alternativo da imagem (opcional)
}

const OutdoorCard: React.FC<OutdoorCardProps> = ({ link, imageUrl, altText = "Outdoor do Anime" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="outdoor-card"
    >
      <img src={imageUrl} alt={altText} />
      <style jsx>{`
        .outdoor-card-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Ocupa a altura total da janela */
          background-color: #f5f5f5; /* Cor de fundo opcional */
        }

        .outdoor-card {
          width: 1350px;
          height: 450px;
          display: block;
          position: relative;
          text-decoration: none;
          overflow: hidden;
        }

        .outdoor-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

    </a>
  );
};

export default OutdoorCard;
