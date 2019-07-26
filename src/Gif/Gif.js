import React, { Component } from 'react';

class Gif extends Component {
    colors = ['#33d9b2', '#ff793f', '#34ace0', '#aaa69d', '#ffda79', '#ff5252']
    state = {
        saved: false,
        loaded: false
    }
    loadHandler = () => {
        this.setState({ loaded: true })
    }
    render() { 
        return (
            <div style={{
                margin: '6px 3px',
                minHeight: this.props.height + 'px', 
                backgroundColor: this.colors[Math.floor(Math.random() * this.colors.length)]
            }}>
                {
                    !this.state.loaded && <img 
                    style={{width: '100%'}} 
                    src={this.props.img} />
                }
                <img
                    className={ this.state.loaded ? '' : 'd-none'} 
                    style={{width: '100%'}} 
                    src={this.props.gif} 
                    onLoad={this.loadHandler} />
            </div>
        );
    }
}
 
export default Gif;