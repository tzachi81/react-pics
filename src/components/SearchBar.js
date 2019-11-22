import React from 'react';

class SearchBar extends React.Component {
    render(){
        return <div>
            <form>
            <input 
            type="text" 
            placeholder="search pics">
            </input>
            </form>
            </div>
    }
}
export default SearchBar;