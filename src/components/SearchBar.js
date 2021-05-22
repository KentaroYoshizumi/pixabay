import React, { useState } from 'react';

const SearchBar=({ onSubmit }) => {
    const [term, setTerm] = useState('');
    const onFormSubmit = (event) => {
      event.preventDefault();
      onSubmit(term);
    };
return (
<form onSubmit={onFormSubmit} className='ui form'>
  <div className='field'>
    <label>Photos Search Bar</label>
    <input 
    type='text'
    name='search'
    placeholder='Search Photos' 
    value={term} 
    onChange={(event) => {
        setTerm(event.target.value);
        }} 
      />
  </div>
</form>
  );
};

export default SearchBar;