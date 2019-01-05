import React, {Component} from 'react'
import { Panel } from 'react-bootstrap'
import './style.css'


class TodoList extends Component {
    render() {
      return (
        <>
          {this.props.items.map(item => (
            <Panel className="card"><Panel.Body key={item.id}>
            {item.text} 
            <div className="closed" onClick={()=>
            this.props.deleteItem(item.id)}>&times;</div>
            </Panel.Body></Panel>
          ))}
        </>  
      );
    }
  }

  export default TodoList