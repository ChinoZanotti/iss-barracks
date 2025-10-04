import SearchBar from "./SearchBar";
import CharList from "./CharList";

export default function FilterableCharList() {
    return(
        <div className="filtered-char-list">
            <SearchBar />
            <CharList />
        </div>
    )
}