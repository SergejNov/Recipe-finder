import "./SearchBar.css";

export default function SearchBar({ searchTerm, setSearchTerm, searchRecipes }){

    const handleInputChange = (e)=>{
    setSearchTerm(e.target.value);
}

    return <div className="search-bar">
                <input className="search-input" type="text" value={searchTerm} onChange={handleInputChange}/>
                <button className="search-button" onClick={searchRecipes}>🔍</button>
            </div>
}