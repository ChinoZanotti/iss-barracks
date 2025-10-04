import './SearchBar.css';

export default function SearchBar() {
    return(
        <form className="search-bar">
            <input type="text" placeholder="Buscar..." className="search-bar__input" />
            <div className='search-bar__filters'>
                <label>
                    <input type="checkbox" />
                    {' '}
                    S
                </label>
                <label>
                    <input type="checkbox" />
                    {' '}
                    A
                </label>
                <label>
                    <input type="checkbox" />
                    {' '}
                    B
                </label>
                <label>
                    <input type="checkbox" />
                    {' '}
                    C
                </label>
                <label>
                    <input type="checkbox" />
                    {' '}
                    D
                </label>
            </div>
        </form>
    );
}