import "./InputSearch.css";
import { useState } from "react";
function InputSearch() {
  const [searchValue, setSearchValue] = useState('');
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
    
      <input
        className="inputSearch"
        placeholder="What product do you want to search?"
        onChange={onSearchValueChange}
        value={searchValue}
        name="searchValue"
      />
      <p>{searchValue}</p>
    </>
  );
}

export default InputSearch;