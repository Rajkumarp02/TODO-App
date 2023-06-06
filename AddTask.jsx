import React, { Component } from 'react'
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Task from './Task'

export default class AddTask extends Component {

    state = {
        task: '',
        list : [],

    };
    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };
    addItem = () => {
        if (this.state.userInput !== "") {
            const task = {
                id : Math.random(),
                value : this.state.task,
            };
            const list = [...this.state.list];
            list.push(task);

            this.setState({
                task:"",
                list,
            })
        }
    }
  handleDelete (list)  {
    const lists = this.state.list.filter (l => l.id !== list);
     this.setState({
        list:lists,
     })
  };
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">

                        <label for="exampleInputEmail1">Add Task</label>
                        <input type="text" class="form-control" id="task"
                            onChange={this.handleChange}
                             placeholder="Add Task" required />
                        <small id="task" class="form-text text-muted"></small>
                    </div>

                    <button type="submit" onClick={this.addItem} >Add</button>
                </form> 
  {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter list" id ='task' onChange={this.handleChange} />
       
      </Form.Group>

     
      <Button variant="primary" type="submit" onClick={this.addItem} >
        Submit
      </Button>
    </Form>
 */}
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>count</th>
          <th>Task</th>
          <th>delete</th>
          
        </tr>
      </thead>
      <tbody>
         {this.state.list.map(item => (    
        <tr>
          <td>{item.id}</td>
          <td>{item.value}</td>
          <td><button type="submit" onClick={() => this.handleDelete(item.id)} >Delete</button>
               </td>
          
          
        </tr>
      )) }
       
        </tbody>
        <Task/>
    </Table>    


            </>
        )
    }
  }

