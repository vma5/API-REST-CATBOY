import React, { useEffect, useState } from "react";
import api from "../services/api";

const CatboyCard = () => {
  const [catboy, setCatboy] = useState(null);

  // Função para buscar uma nova imagem
  const fetchCatboy = async () => {
    try {
      const response = await api.get("/img");
      setCatboy(response.data);
    } catch (error) {
      console.error("Erro ao buscar imagem:", error);
    }
  };

  useEffect(() => {
    fetchCatboy();
  }, []);

  return (
    <div>
      {catboy ? (
        <div>
          <img src={catboy.url} alt="Catboy" width="300px" />
          <p>Artista: {catboy.artist}</p>
          <button onClick={fetchCatboy}>Nova Imagem</button>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default CatboyCard;
