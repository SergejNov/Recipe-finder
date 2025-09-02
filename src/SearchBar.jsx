

export default function SearchBar({ searchTerm, setSearchTerm, searchRecipes }){

    const handleInputChange = (e)=>{
    setSearchTerm(e.target.value);
}

    return <div>
                <input type="text" value={searchTerm} onChange={handleInputChange}/>
                <button onClick={searchRecipes}>🔍</button>
            </div>
}