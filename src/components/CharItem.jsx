import "./CharItem.css";

export default function CharItem({ key, rankName, name, charges, ability, comment }) {
    return(
        <div className="char-item">
            <button>
                <div className="glow-border"></div>
                <h1>{ rankName }</h1>
                <h3>{ name }</h3>
            </button>
            <div className="char-item__content">
                <p><span>Cargas:</span> { charges }</p>
                <p><span>Habilidad:</span> { ability }</p>
                <p><span>Obs:</span> { comment }</p>
            </div>
        </div>
    )  
}