import "./App.css";
import { useState } from "react";
import TelaClicker from "./components/TelaClicker";
import TelaMelhorias from "./components/TelaMelhorias";
import { FaCalendar } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiSoccerKick } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import TelaPartida from "./components/TelaPartida";

const listaMelhorias = JSON.parse(localStorage.getItem("lista-melhorias")) || [
  {
    id: 1,
    texto: "Pedir dinheiro a amigos",
    custo: 10,
    tipo: "multiplicador",
    efeito: "+0.1",
  },
  {
    id: 2,
    texto: "Pedir dinheiro a vizinhos",
    custo: 50,
    tipo: "multiplicador",
    efeito: "+0.5",
  },
  {
    id: 3,
    texto: "Treino de passe",
    custo: 100,
    tipo: "forca",
    efeito: "+50",
  },
  {
    id: 4,
    texto: "Investidor local",
    custo: 300,
    tipo: "multiplicador",
    efeito: "+2",
  },
  {
    id: 5,
    texto: "Treino de lançamento",
    custo: 300,
    tipo: "forca",
    efeito: "+100",
  },
  {
    id: 6,
    texto: "Investidor vizinho",
    custo: 400,
    tipo: "multiplicador",
    efeito: "+4",
  },
];

const listaAdversarios = JSON.parse(
  localStorage.getItem("lista-adversarios"),
) || [
  {
    id: 1,
    nome: "Proletario FC",
    forca: 140,
  },
  {
    id: 2,
    nome: "Super FC",
    forca: 200,
  },
];

function App() {
  const [count, setCount] = useState(
    Number(localStorage.getItem("count")) || 0.0,
  );
  const [multiplicador, setMultiplicador] = useState(
    Number(localStorage.getItem("multiplicador")) || 0.1,
  );
  const [diasFaltando, setDiasFaltando] = useState(
    Number(localStorage.getItem("dias-faltando")) || 5,
  );
  const [forcaTime, setForcaTime] = useState(
    Number(localStorage.getItem("forca")) || 100,
  );

  function handleClick() {
    const novoValor = Number((Number(count) + multiplicador).toFixed(1));

    if (!Number.isInteger(novoValor)) {
      setCount(novoValor);
    } else {
      setCount(novoValor + ".0");
    }

    localStorage.setItem("count", novoValor);
  }

  function implementaMelhoria(melhoria) {
    if (melhoria.custo <= count) {
      let novoMultiplicador = Number(
        (multiplicador + melhoria.multiplicador).toFixed(1),
      );
      let novaForca = forcaTime + melhoria.forca;
      let novoContador = Number((count - melhoria.custo).toFixed(1));

      setMultiplicador(novoMultiplicador);
      setForcaTime(novaForca);
      setCount(novoContador);

      const idMelhoria = melhoria.id;

      const indice = listaMelhorias.findIndex(
        (m) => "item-" + m.id === idMelhoria,
      );

      if (indice !== -1) {
        listaMelhorias.splice(indice, 1);
      }

      localStorage.setItem("multiplicador", novoMultiplicador);
      localStorage.setItem("forca", novaForca);
      localStorage.setItem("count", novoContador);
      localStorage.setItem("lista-melhorias", JSON.stringify(listaMelhorias));
    }
  }

  function diminuiDia() {
    setDiasFaltando(diasFaltando - 1);
    localStorage.setItem("dias-faltando", diasFaltando - 1);
  }

  setInterval(() => {
    diminuiDia();
  }, 60000);

  if (diasFaltando < 1) {
    let isMaisForte = forcaTime >= listaAdversarios[0].forca;

    setTimeout(() => {
      setDiasFaltando(5);

      if (isMaisForte) {
        listaAdversarios.shift();
      }

      localStorage.setItem("dias-faltando", 5);
      localStorage.setItem("lista-adversarios", JSON.stringify(listaAdversarios));
    }, 8000);
  }

  return (
    <div className="app">
      <header>
        {diasFaltando > 0 && (
          <div className="header-container">
            <h3 className="dias-faltando">
              {diasFaltando} <FaCalendar />
            </h3>
            <h2 className="contagem">
              {count} <RiMoneyDollarCircleFill />
            </h2>
            <h3 className="forca-time">
              {forcaTime} <GiSoccerKick />
            </h3>
            <h3 className="multiplicador">
              {multiplicador} <IoIosFootball />
            </h3>
          </div>
        )}
      </header>

      <main>
        <div className="main-container">
          {diasFaltando > 0 && <TelaClicker noClique={handleClick} />}
          {diasFaltando < 1 && (
            <TelaPartida
              adversario={listaAdversarios[0]}
              forcaTime={forcaTime}
            />
          )}
        </div>
      </main>

      <footer>
        {diasFaltando > 0 && (
          <div className="footer-container">
            <TelaMelhorias
              listaMelhorias={listaMelhorias}
              implementaMelhoria={implementaMelhoria}
            />
          </div>
        )}
      </footer>
    </div>
  );
}

export default App;
