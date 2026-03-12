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
  const [count, setCount] = useState(0)
  const [diasFaltando, setDiasFaltando] = useState(30);
  const [forcaTime, setForcaTime] = useState(100);
  const [telaAtual, setTelaAtual] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="app">
      <header>
        <div className="header-container">
          <h2 className="contagem">{count} <RiMoneyDollarCircleFill /></h2>
          <h3 className="dias-faltando">{diasFaltando} <FaCalendar /></h3>
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
