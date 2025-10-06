import CharItem from "./CharItem";
import issData from "../assets/iss.json";
import "./CharList.css"
import { useMemo } from "react";

export default function CharList({ selectedRanks, filterText }) {
  const filteredCharacters = useMemo(() => {
    const hasAnyRank = selectedRanks.size > 0;

    return issData.characterAbilities
    .filter((char) => 
    char.name.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((char) => 
    hasAnyRank ? selectedRanks.has(char.rankName) : true
    );
  }, [selectedRanks, filterText]);

  return (
    <div className="char-list">
      {filteredCharacters.map((element) => (
        <CharItem
          key={element.id}
          rank={element.rankName}
          name={element.name}
          charges={element.charges}
          ability={element.ability}
          comment={element.comment}
        />
      ))}
    </div>
  );
}