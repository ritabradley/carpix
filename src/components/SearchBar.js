import React, { useState } from 'react';

const SearchBar = () => {
  let [searchTerm, onInputChange] = useState('');
  return (
    <div className='ui segment'>
      <form className='ui form'>
        <div className='field'>
          <label className='ui label' htmlFor='image-search'>
            Image Search
          </label>
          <input
            id='image-search'
            type='text'
            placeholder='Search...'
            onChange={e => onInputChange((searchTerm = e.target.value))}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
