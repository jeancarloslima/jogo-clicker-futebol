import { IoIosFootball } from "react-icons/io";
import './tela-clicker.css';

export default function TelaClicker({ noClique }) {
    return (
        <div className="clicker-container">
            <button className="botao-click" onClick={noClique}><IoIosFootball /></button>
        </div>
    )
}