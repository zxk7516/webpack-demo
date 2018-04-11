import React from 'react';

const SearchBox = ({searchChange,searchfield}) => {
    return(
        <div className='pa2'>
            <input className='pa3 ba b--green bg-light-blue'
             type='search' placeholder='search robots' value={searchfield} onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;