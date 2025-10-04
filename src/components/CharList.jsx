import CharItem from "./CharItem";
import issData from "../assets/iss.json";

export default function CharList() {
  return (
    <div>
      {issData.characterAbilities.map((element) => (
        <CharItem
          key={element.id}
          rankName={element.rankName}
          name={element.name}
          charges={element.charges}
          ability={element.ability}
          comment={element.comment}
        />
      ))}
    </div>
  );
}