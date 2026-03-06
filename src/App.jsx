import { useState } from 'react'
import './App.css'
import TelaClicker from './components/TelaClicker';
import TelaTime from './components/TelaTime';

function App() {
  const [count, setCount] = useState(0)
  const [diasFaltando, setDiasFaltando] = useState(30);
  const [telaAtual, setTelaAtual] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="app">
      <header>
        <div className="header-container">
          <h2 className="contagem">{count}</h2>
          <h3 className="dias-faltando">{diasFaltando} dias</h3>
        </div>
      </header>

      <main>
        <div className="main-container">
          {telaAtual === 0 && <TelaClicker noClique={handleClick} />}
          {telaAtual === 1 && <TelaTime />}
        </div>
      </main>
    </div>
  )
}

export default App
