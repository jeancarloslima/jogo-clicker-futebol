import './tela-melhorias.css';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { IoIosFootball } from 'react-icons/io';
import { GiSoccerKick } from 'react-icons/gi';

export default function TelaMelhorias() {
    return (
        <div className="melhorias-container">
            <ul className="lista-melhorias">
                <li className="item-melhoria">
                    <span className='nome-melhoria'>Pedir dinheiro a amigos</span>
                    <span className="custo-melhoria">10 <RiMoneyDollarCircleFill /></span>
                    <span className="efeito-melhoria">+0.1 <IoIosFootball /></span>
                </li>
                <li className="item-melhoria">
                    <span className='nome-melhoria'>Pedir dinheiro a vizinhos</span>
                    <span className="custo-melhoria">50 <RiMoneyDollarCircleFill /></span>
                    <span className="efeito-melhoria">+0.5 <IoIosFootball /></span>
                </li>
                <li className="item-melhoria">
                    <span className='nome-melhoria'>Treino de passe</span>
                    <span className="custo-melhoria">100 <RiMoneyDollarCircleFill /></span>
                    <span className="efeito-melhoria">+50 <GiSoccerKick /></span>
                </li>
                <li className="item-melhoria">
                    <span className='nome-melhoria'>Investidor local</span>
                    <span className="custo-melhoria">300 <RiMoneyDollarCircleFill /></span>
                    <span className="efeito-melhoria">+2 <IoIosFootball /></span>
                </li>
            </ul>
        </div>
    )
}