import React, { useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";

const SearchBar = ({ OnSearch }) => {
  const [searchInput, setsearchInput] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setsearchInput(inputValue);
    OnSearch(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
