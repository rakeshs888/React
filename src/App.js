import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
		constructor(){
		super();
		this.state={currentEvent: '---',
					txt : "Hello Every one here!!!",
					txt3 : "Bye every one"}
		this.update= this.update.bind(this)
		 this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
		 

		}
		update(e){
		this.setState({currentEvent: e.type})
		this.setState({txt3: e.target.value}) 
	}

	findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';
   }
	render(){
		return (
			<div>
			<textarea
				onKeyPress={this.update}
				onCopy={this.update}
				onDoubleClick={this.update}
				onCut={this.update}
				onFocus={this.update}
				onBlur={this.update}
				onMouseOver={this.update}
				onMouseDown={this.update}
				onTouchStart={this.update}
				onTouchMove={this.update}
				onTouchEnd={this.update}
				cols="40"
				rows="10" 	/>
				<h1>{this.state.currentEvent}</h1>	
				<button onClick={this.findDomNodeHandler}>I <Heart/> React</button>
				<div id="myDiv">Hello</div>
				<h1>{this.state.txt3}</h1>
				<Widget update={this.update.bind(this)}/>
				<Widget update={this.update.bind(this)}/>
 				<Widget update={this.update.bind(this)}/>
 				<Widget update={this.update.bind(this)}/>
			</div>
			
		)
		
	}
}




class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}


const Widget = (props) =>
<div>
	<input type="text" onChange={props.update}/>
	<Button>I <Heart/> React</Button>
</div>
 const Button = (props) => <button>{props.children}</button>

// class Heart extends React.Component {
// 	render(){
// 		return <span>&hearts;</span>
// 	}
// }

export default App;


