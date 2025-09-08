import "./SearchBar.css";

export default function SearchBar({ searchTerm, setSearchTerm, searchRecipes }){

    const handleInputChange = (e)=>{
    setSearchTerm(e.target.value);
}
    const handleKeyDown = (e)=>{
        e.key == "Enter" && searchRecipes()
    }

    return <div className="search-bar">
                <input className="search-input" type="text" value={searchTerm} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
                <button className="search-button" onClick={searchRecipes}>🔍</button>
            </div>
}