import "./InputSearch.css";

function InputSearch({searchValue, setSearchValue}) {

    const handleInputValue = (e) => {
        setSearchValue({...searchValue, [e.target.name]:e.target.value});
    };
    
    const {inputOption} = searchValue;
     
     if((parseInt(inputOption.length)>1)) {
        const input = document.getElementById('inputSearch')
        input.disabled = false; 
        input.placeholder = "What product do you want to search?"
     }
     
    return (
        <>
            <div className="filter-Product">
            <h3>Select a filter:</h3>
            <br/>
            <label>
                <input
                type="radio"
                value='name'
                name='inputOption'
                onChange={handleInputValue}
                />
                Product's name
            </label>

            <label>
                <input
                type="radio"
                value='category'
                name= 'inputOption'
                onChange={ handleInputValue}
                />
                Product's category
            </label>

            <label>
                <input
                type="radio"
                value="id"
                name= 'inputOption'
                onChange={handleInputValue}
                />
                Product's id
            </label>
            </div>
            <input
            type="search"
                className="inputSearch"
                id="inputSearch"
                placeholder="Pick out above a filter to search the product"
                value={searchValue.inputSearch}
                name="inputSearch"
                onChange={handleInputValue}
                disabled
            />
        </>
  );
}

export default InputSearch;