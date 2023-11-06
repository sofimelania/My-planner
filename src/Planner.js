import { Component } from "react";
import check from  './check.png'

export class Planner extends Component {
    state = {
userInput:"",
 planner: []
    }

    onChangeEvent(e) {
        this.setState({userInput:e})
    }

    addItem(input) {
if(input===''){
    alert("Please check it!")
}
else{
    let listArray=this.state.planner
    listArray.push(input)
    this.setState({planner: listArray, userInput:''})  
}
    }

    deleteItem(){
        let listArray=this.state.planner;
        listArray.length=0;
        this.setState({planner: listArray})
    }

    crossedWord(event) {
        const li=event.target;
        li.classList.toggle('crossed');
    }
onFormSubmit(e){
    e.preventDefault()
}
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
          <input type="text" placeholder="What your plans for today?"
          onChange={(e) =>{this.onChangeEvent(e.target.value)}}
          value={this.state.userInput}/>     
            </div>
            <div className="container">
                <button className="add" onClick={() =>this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.planner.map((item, index) =>(
                    <li onClick={this.crossedWord} key={index}>{item}
                  <img src={check} width="40px" alt="check"/> 
                    </li>
                ))}
                
            </ul>
            <div className="container">
            <button className="delete" onClick={() => this.deleteItem()}>Delete</button>
            </div>
            </form>
           </div> 
        )
            }

}
