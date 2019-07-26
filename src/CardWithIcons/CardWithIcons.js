import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class CardWithIcons extends React.Component {
    state = {
        hover: false,
        saved: false,
        gifLoaded: false,
        previewLoaded: false,
        height: 0
    }
    container = React.createRef();

    componentDidMount = () => {
        const computedWidth = window.getComputedStyle(this.container.current).getPropertyValue('width');
        const ratio = this.props.imgWidth / parseInt(computedWidth);
        console.log(ratio);
        this.setState({ height: this.props.imgHeight / ratio }) 
    }
    hoverHandler = () => {
        this.setState({ hover: !this.state.hover })
    }
    clickHandler = () => {
        this.props.clickAction();
        this.setState({ saved: !this.state.saved })
    }
    previewLoadedHandler = () => {
        this.setState({ previewLoaded: true })
    }
    gifLoadedHandler = () => {
        this.setState({ gifLoaded: true })
    }
    render() { 
        return <Card 
            ref={this.container} 
            className={ this.state.previewLoaded ? 'animated fadeIn' : 'd-none'}>
            <div>
                <Card.Img 
                    className={ this.state.gifLoaded ? '' : 'd-none'}
                    variant="top" 
                    src={this.props.img} 
                    onLoad={this.previewLoadedHandler}/>
                <Card.Img 
                    className={ this.state.gifLoaded ? 'd-none' : 'd-none'}
                    variant="top" 
                    src={this.props.gif} 
                    onLoad={this.gifLoadedHandler}/>
            </div>
            <Card.Body>
                <FontAwesomeIcon 
                    className={ this.state.saved ? 'animated bounceIn' : ''}
                    icon={faHeart} 
                    onClick={this.clickHandler}
                    onMouseEnter={this.hoverHandler}
                    onMouseLeave={this.hoverHandler}
                    style={{color: this.state.saved || this.state.hover ? 'red' : 'gray'}}
                />
            </Card.Body>
        </Card>
    }hover
}

export default CardWithIcons;