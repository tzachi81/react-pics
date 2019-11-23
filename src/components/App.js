import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';

// const client-ID = '9d254370034649ca2b86fc602c456a1f1479d425e03710996dc9e00579fd57bc';
// const secretKey = '9e9607359d78fcfc26563001dff34a8623c263f94e314cbf722c7c91e93818bb';

class App extends React.Component{

    state = {images: []}
    onSearchbarSubmit = async(term) => {
        const response = await unsplash.get('search/photos', {
            params: { query: term }            
        });
        this.setState({ images: response.data.results });
    };

    render(){
        return (
            <div className="ui container" style={{'marginTop': '10px'}}>
                <SearchBar onSubmit = {this.onSearchbarSubmit}/>
                Found {this.state.images.length} images.
            </div>
        )
    }
}

export default App;