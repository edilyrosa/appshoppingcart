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
            <div>
            <h3>Select an filter:</h3>
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
                placeholder="Select a filter to search the product?"
                value={searchValue.inputSearch}
                name="inputSearch"
                onChange={handleInputValue}
                disabled
            />
        </>
  );
}

export default InputSearch;