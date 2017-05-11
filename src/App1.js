import React from 'react';


// const App =() => <h1> Hello </h1>

// class App1 extends React.Component{
// 	render(){
// 		// return <h1> Hello World</h1>
// 		// return <h1>{this.props.txt1}</h1>
// 		return <Title text="123456" />
// 	}
// }

// const Title = (props) => <h1> Title: {props.text}</h1>

// Title.propTypes={
// text(props, propName, component){
// 	if(!(propName in props)){
// 		return new Error(`missing ${propName}`)
// 	}
// 	if(props[propName].length > 6){
// 		return new Error (`${propName} was too long`)
// 	}
// }
// }

class App1 extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    fetch( 'https://swapi.co/api/people/?format=json' )
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}))
  }
  filter(e){
    this.setState({filter: e.target.value})
  }
   render(){
    let items = this.state.items;
    if(this.state.filter){
    	items=items.filter(item =>
    		item.name.toLowerCase()
    		.includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
      <input type="text" onChange={this.filter.bind(this)}/>
          {items.map(item =>
        	<Person key={item.name} person={item}/>)}
      </div>
    )
  }
}

const Person=(props)=> <h4>{props.person.name}</h4>


/*// class App1 extends React.Component{
// 	constructor(){
// 		super(); 
// 		this.state={val:0}

		
// 		}

// 	update(){
// 		this.setState({
// 		val: this.state.val +1})
// 	}
// 	render(){
		
// 			console.log('render');
// 			return <div><button onClick={this.update.bind(this)}>{this.state.val}</button>
				
// 			 <Title text="123456" /></div>
			
			
// 	}

// }

// const Title = (props) => <h1> Title: {props.text}</h1>

// Title.propTypes={
// text(props, propName, component){
// 	if(!(propName in props)){
// 		return new Error(`missing ${propName}`)
// 	}
// 	if(props[propName].length > 6){
// 		return new Error (`${propName} was too long`)
// 	}
// }
// }*/






export default App1;





/*import React from 'react';
import ReactDOM from 'react-dom';




class App2 extends React.Component{
 constructor(){
   super();
   this.state= {
     txt : "Hello Every one here!!!",
     txt3 : "Bye every one", 
     val : 0}
     this.update=this.update.bind(this);
 }
 update(){
  
   this.setState({val: this.state.val+1}) 
 }

 componentWillMount(){
    console.log('componentWillMount')
  }

 render(){
  console.log('render')
    return <button onClick={this.update}>{this.state.val}</button>
  }
    componentDidMount(){
    console.log('componentDidMount')
      }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
    // accessing propps syntax{ this.props.defined name }// forr line 11
} 
   
   




class Wrapper extends React.Component {
//   constructor(){
// super();
//   }    
  mount(){
    ReactDOM.render(<App2 />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
        <div>
          <button onClick={this.mount.bind(this)}>Mount</button>
          <button onClick={this.unmount.bind(this)}>Unmount</button>
          <div id="a"></div>
        </div>
    )
  }
}
export default Wrapper;
// */