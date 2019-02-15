//responsible for rendering one single image at a time 
//will adjust grid-row-end rule to accomodate the image size

import React from "react";

class ImageCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {spans: 0};
		//reference to the instance of the element's dom node
		this.imageRef = React.createRef();
	}

	//is called after component gets rendered, but it is rendered much earlier than loaded so we have to act on it only after event loaded.
	componentDidMount(){
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

		//callbacks this variable has to be bound to the object but they are called on the window so we are using an arrow function to bind it to the place the method was declared
	setSpans = () =>{
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height/10);
		this.setState({spans: spans});
	}

	//inline style has to have double curly braces style={{gridRowEnd: `span${this.state.spans}`}}
	render(){
		const {description, urls} = this.props.image;
		return (
			<div style={{gridRowEnd: `span ${this.state.spans}`}} >
				<img 
				ref={this.imageRef}
				alt={description} 
				src={urls.regular}
				/>
			</div>
			);
	}
}

export default ImageCard