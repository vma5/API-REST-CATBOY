import React, { useState } from "react";
import api from "../services/api";

const CatboyForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/say", { text });
      alert(`Resposta da API: ${response.data.message}`);
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite algo..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CatboyForm;
