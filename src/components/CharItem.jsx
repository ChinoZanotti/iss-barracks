import { useState } from "react";
import "./CharItem.css";

export default function CharItem({ key, rank, name, charges, ability, comment }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };


    return(
        <div className={`char-item ${isOpen ? "is-open" : ""}`}>
            <button onClick={handleToggle} className="char-item__button">
                <div className="glow-border"></div>
                <h1>{ rank }</h1>
                <h3>{ name }</h3>
            </button>
            <div 
                className="char-item__content"
                style={{ display: isOpen ? "block" : "none" }}
            >
                <p><span>Cargas:</span> { charges }</p>
                <p><span>Habilidad:</span> { ability }</p>
                <p><span>Obs:</span> { comment }</p>
            </div>
        </div>
    )  
}