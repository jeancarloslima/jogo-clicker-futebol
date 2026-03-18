import "./tela-melhorias.css";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosFootball } from "react-icons/io";
import { GiSoccerKick } from "react-icons/gi";

export default function TelaMelhorias({ listaMelhorias, implementaMelhoria }) {
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
        {
            listaMelhorias.slice(0, 4).map(item => (
                <li className="item-melhoria" key={item.id} id={"item-"+item.id} onClick={pegaValores}>
                    <span className="nome-melhoria">{item.texto}</span>
                    <span className="custo-melhoria">{item.custo} <RiMoneyDollarCircleFill /></span>
                    <span className="efeito-melhoria" tipo={item.tipo}>{item.efeito} {item.tipo === "multiplicador" ? <IoIosFootball /> : <GiSoccerKick />}</span>
                </li>
            )) 
        }
      </ul>
    </div>
  );
}
