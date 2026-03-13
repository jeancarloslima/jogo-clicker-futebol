import { useState } from 'react'
import './App.css'
import TelaClicker from './components/TelaClicker';
import TelaTime from './components/TelaTime';
import TelaMelhorias from './components/TelaMelhorias';
import TelaJogadores from './components/TelaJogadores';
import { FaCalendar } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { GiSoccerKick } from 'react-icons/gi';

function App() {
  const [count, setCount] = useState(0.0);
  const [multiplicador, setMultiplicador] = useState(0.1);
  const [diasFaltando, setDiasFaltando] = useState(30);
  const [forcaTime, setForcaTime] = useState(100);
  const [telaAtual, setTelaAtual] = useState(0);

  function handleClick() {
    const novoValor = Number((Number(count) + multiplicador).toFixed(1));

    if (!Number.isInteger(novoValor)) {
      setCount(novoValor);
    } else {
      setCount(novoValor + ".0")
    }
    
  }

  return (
    <div className="app">
      <header>
        <div className="header-container">
          <h3 className="dias-faltando">{diasFaltando} <FaCalendar /></h3>
          <h2 className="contagem">{count} <RiMoneyDollarCircleFill /></h2>
          <h3 className="forca-time">{forcaTime} <GiSoccerKick /></h3>
        </div>
      </header>

      <main>
        <div className="main-container">
          {telaAtual === 0 && <TelaClicker noClique={handleClick} />}
          {telaAtual === 1 && <TelaTime />}
        </div>
      </main>

      <footer>
        <div className="footer-container">
          {telaAtual === 0 && <TelaMelhorias />}
          {telaAtual === 1 && <TelaJogadores />}
        </div>
      </footer>
    </div>
  )
}

export default App
