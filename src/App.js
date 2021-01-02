import ListItems from './components/ListItems';
import Listdata from './components/ListData';
import React, { Component } from 'react'

export default class App extends Component {
 constructor(props){
   super(props);
   this.state={
     Data:Listdata
   }
 }
  render() {
    const task=this.state.Data.map(list =><ListItems key={list.id} todo={list}/>)

    return (
      <div className="App">
              <div className="page-content page-container" id="page-content">
                <div className="padding">
                           <h1>My Todo App</h1> 
                    <div className="row container d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card px-3">
                                <div className="card-body">
                                    <h4 className="card-title">Awesome Todo list</h4>
                                    {/* <div className="add-items d-flex">
                                       <input type="text" className="form-control todo-list-input" 
                                       placeholder="What do you need to do today?"/>
                                       <button className="add btn btn-primary 
                                       font-weight-bold todo-list-add-btn">Add</button> 
                                     </div> */}
                                       <div className="list-wrapper">
                                        {task}
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
        </div>
       
    );
  
  }
}

