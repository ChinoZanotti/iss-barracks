import SearchBar from "./SearchBar";
import CharList from "./CharList";
import { useState } from "react";
import issLogo from '../assets/iss-logo.webp';
import './FilterableCharList.css';
import issData from "../assets/iss.json";

export default function FilterableCharList() {

    const RANKS = [...new Set (
        issData.characterAbilities.map((char) => char.rankName)
    )
    ];

    const [filterText, setFilterText] = useState('');
    const [selectedRanks, setSelectedRanks] = useState(new Set());

    const toggleRank = (r) => {
        setSelectedRanks(prev => {
            const next = new Set(prev);
            next.has(r) ? next.delete(r) : next.add(r);
            return next;
        });
    };

    return(
        <div className="filtered-char-list">
            <div className="logo-container">
                <img src={issLogo} />
            </div>
            <SearchBar 
                filterText={filterText}
                onFilterTextChange={setFilterText}
                ranks={RANKS}
                selected={selectedRanks}
                onToggle={toggleRank}
                onClear={() => setSelectedRanks(new Set())} />
            <CharList
                filterText={filterText}
                selectedRanks={selectedRanks} />
        </div>
    )
}