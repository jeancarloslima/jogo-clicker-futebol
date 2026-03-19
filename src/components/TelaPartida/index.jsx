import { useState, useEffect } from "react";
import "./tela-partida.css";

export default function TelaPartida({ adversario, forcaTime }) {
  let isMaisForte = forcaTime >= adversario.forca;
  const [fimPartida, setFimPartida] = useState(false);

  useEffect(() => {
    const timerPartida = setTimeout(() => {
      setFimPartida(true);
    }, 4000);

    return () => clearTimeout(timerPartida);
  }, []);

  return (
    <div className="partida-container">
      <h2>Hora da partida!</h2>
      <div className="times-container">
        <div className="time-jogador">
          <h3>Jogador</h3>
          <h3>{forcaTime}</h3>
        </div>
        <div className="time-adversario">
          <h3>{adversario.nome}</h3>
          <h3>{adversario.forca}</h3>
        </div>
      </div>
      {!fimPartida && <h3>Simulando...</h3>}
      {fimPartida && (
        <div className="resultados-container">
          <h3 className="resultado-jogador">{isMaisForte ? "3" : "1"}</h3>
          <h3>X</h3>
          <h3 className="resultado-adversario">{isMaisForte ? "0" : "2"}</h3>
        </div>
      )}
    </div>
  );
}
