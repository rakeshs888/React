import React from 'react';




class App2 extends React.Component{
 constructor(){
   super();
   this.state= {
     txt : "Hello Every one here!!!",
     txt3 : "Bye every one"
   }
 }
 update(e){
   this.setState({txt3: e.target.value}) 
 }
 render(){
   
    // accessing propps syntax{ this.props.defined name }// forr line 11
    // let txt = this.props.txt
   return (
     <div>
       <h1>{this.state.txt3}</h1>
       <Widget update={this.update.bind(this)}/>
       <Widget update={this.update.bind(this)}/>
       <Widget update={this.update.bind(this)}/>
       <Widget update={this.update.bind(this)}/>
     </div>
     )
   }
}


const Widget = (props) =>
<input type="text" onChange={props.update}/>
export default App2;