import React from 'react';
import axios from 'axios';
import Gif from './Gif/Gif';

class GifGroup extends React.Component {
    state = {
        data: [],
        favs: []
    }

    addToFav = data => {
        this.state.favs.some(f => f.id === data.id) ?
        this.setState({ favs: this.state.favs.filter(f => f.id !== data.id)}) :
        this.setState({ favs: [...this.state.favs, data] }); 
    }

    componentDidMount = async() => {
        const result = await axios.get(`https://api.giphy.com/v1/gifs/trending?offset=${this.props.pagination * 10}&limit=10&api_key=1caTwW79gRr4GZriokYitTCr94gN9RWc`);
        this.setState({ data: result.data.data });
    }

    renderImages = () => this.state.data.map(d =>
         <Gif 
            gif={d.images.fixed_width_downsampled.url}
            img={d.images.fixed_width_still.url}
            height={d.images.fixed_width.height}
            key={d.id}
            clickAction={() => this.addToFav(d)}/>
    )
    
    render = () => this.renderImages();
}

export default GifGroup;