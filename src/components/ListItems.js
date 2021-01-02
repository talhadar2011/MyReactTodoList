import React, { Component } from 'react'

export default class ListItems extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.todo.id,
            Task:props.todo.Task,
            Doneby:props.todo.Doneby,
            checked:props.todo.Checked,
            clicked:false
        }
        this.onchecked = this.onchecked.bind(this);
        this.onclicked = this.onclicked.bind(this);



    }
    onclicked(id)
    {
        this.setState(preState =>
            {
                return{
                    clicked:!preState.clicked,  
                }                
            })
    }
    onchecked(id)
    {
               
        this.setState(preState =>
            {
                return{
                    checked:!preState.checked,  
                }                
            })
    } 
    
    render() {
       return (
        <ul style={{visibility: this.state.clicked ? "hidden" : "visible"}} className="d-flex flex-column-reverse todo-list">
            <li>
                <div className="form-check" > 
                <label className={this.state.checked ? "form-check-label completed" : "form-check-label  "} 
                style={{fontWeight:"bolder"}}> 
                <input  className="checkbox" 
                checked={this.state.checked}
                onChange={()=>this.onchecked(this.state.id)}
                type="checkbox"/> {this.state.Task} 
                <i className="input-helper"></i>
                </label>
                <div style={{visibility: this.state.checked ? "visible" : "hidden"}}>
                        <p >Completed By {this.state.Doneby}</p>
                </div>
                </div>
                <i className="remove mdi mdi-close-circle-outline" onClick={()=>this.onclicked(this.state.id)}></i>
 
            </li>
            
        </ul>
    )
                    
       
 }
}



