import React, { useState } from 'react';

const SearchBar = props => {
  let [searchTerm, onInputChange] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    props.onSubmit(searchTerm);
  };

  return (
    <div className='ui segment'>
      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <label className='ui label' htmlFor='image-search'>
            Image Search
          </label>
          <input
            id='image-search'
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={e => onInputChange((searchTerm = e.target.value))}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
