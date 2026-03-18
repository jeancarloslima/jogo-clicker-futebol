import "./App.css";
import { useState } from "react";
import TelaClicker from "./components/TelaClicker";
import TelaMelhorias from "./components/TelaMelhorias";
import { FaCalendar } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiSoccerKick } from "react-icons/gi";

function App() {
  const [count, setCount] = useState(0.0);
  const [multiplicador, setMultiplicador] = useState(0.1);
  const [diasFaltando, setDiasFaltando] = useState(30);
  const [forcaTime, setForcaTime] = useState(100);

  function handleClick() {
    const novoValor = Number((Number(count) + multiplicador).toFixed(1));

    if (!Number.isInteger(novoValor)) {
      setCount(novoValor);
    } else {
      setCount(novoValor + ".0");
    }
  }

  function implementaMelhoria(melhoria) {
    if (melhoria.custo <= count) {
      let novoMultiplicador = Number((multiplicador + melhoria.multiplicador).toFixed(1));
      let novaForca = forcaTime + melhoria.forca;
      let novoContador = Number((count - melhoria.custo).toFixed(1));

      console.log([novoMultiplicador, novaForca, novoContador]);

      setMultiplicador(novoMultiplicador);
      setForcaTime(novaForca);
      setCount(novoContador);
    }
  }

  function diminuiDia() {
    setDiasFaltando(diasFaltando - 1);
  }

  setInterval(() => {
    diminuiDia();
  }, 60000);

  return (
    <div className="app">
      <header>
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
        </div>
      </header>

      <main>
        <div className="main-container">
          <TelaClicker noClique={handleClick} />
        </div>
      </main>

      <footer>
        <div className="footer-container">
          <TelaMelhorias implementaMelhoria={implementaMelhoria} />
        </div>
      </footer>
    </div>
  );
}

export default App;
