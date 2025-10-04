export default function SearchBar() {
    return(
        <form>
            <input type="text" placeholder="Buscar..." />
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
        </form>
    );
}