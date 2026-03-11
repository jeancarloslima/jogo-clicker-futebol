import { IoIosFootball } from "react-icons/io";

export default function TelaClicker({ noClique }) {
    return (
        <div className="clicker-container">
            <button onClick={noClique}><IoIosFootball /></button>
        </div>
    )
}