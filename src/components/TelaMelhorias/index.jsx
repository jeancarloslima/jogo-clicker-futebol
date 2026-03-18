import "./tela-melhorias.css";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosFootball } from "react-icons/io";
import { GiSoccerKick } from "react-icons/gi";

export default function TelaMelhorias({ implementaMelhoria }) {
  function pegaValores(item) {
    const id = item.target.id;
    const custo = Number(document.querySelector(`#${id} .custo-melhoria`).textContent);
    const efeito = Number(document.querySelector(`#${id} .efeito-melhoria`).textContent.slice(1));
    const tipoEfeito = document.querySelector(`#${id} .efeito-melhoria`).attributes[1].value ==="multiplicador";

    implementaMelhoria({
      id: id,
      multiplicador: tipoEfeito ? efeito : 0,
      forca: !tipoEfeito ? efeito : 0,
      custo: custo,
    });
  }

  return (
    <div className="melhorias-container">
      <ul className="lista-melhorias">
        <li className="item-melhoria" id="item-1" onClick={pegaValores}>
          <span className="nome-melhoria">Pedir dinheiro a amigos</span>
          <span className="custo-melhoria">
            10 <RiMoneyDollarCircleFill />
          </span>
          <span className="efeito-melhoria" tipo="multiplicador">
            +0.1 <IoIosFootball />
          </span>
        </li>
        <li className="item-melhoria">
          <span className="nome-melhoria">Pedir dinheiro a vizinhos</span>
          <span className="custo-melhoria">
            50 <RiMoneyDollarCircleFill />
          </span>
          <span className="efeito-melhoria">
            +0.5 <IoIosFootball />
          </span>
        </li>
        <li className="item-melhoria">
          <span className="nome-melhoria">Treino de passe</span>
          <span className="custo-melhoria">
            100 <RiMoneyDollarCircleFill />
          </span>
          <span className="efeito-melhoria">
            +50 <GiSoccerKick />
          </span>
        </li>
        <li className="item-melhoria">
          <span className="nome-melhoria">Investidor local</span>
          <span className="custo-melhoria">
            300 <RiMoneyDollarCircleFill />
          </span>
          <span className="efeito-melhoria">
            +2 <IoIosFootball />
          </span>
        </li>
      </ul>
    </div>
  );
}
