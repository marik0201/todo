import React, {Component} from 'react'
import TodoList from '../TodoList/TodoList'
import { Grid, Row, Col } from 'react-bootstrap'
import './style.css'


class Todo extends Component {
constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  deleteItem = key => {
    const filterItems = this.state.items.filter(item => {return item.id !== key
    })
    this.setState({
      items: filterItems,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div className="container">
      <h1>Task 1</h1>
      <Grid>
            <Row>
                <Col md={6}>
                    <form onSubmit={this.handleSubmit} noValidate>
                    <div className="group">
                    <input
                        id="new-todo"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.text}
                        required
                    />
                    <span className="bar"></span>
                    <label htmlFor="new-todo">Enter text
                    </label>
                    
                    <br/>
                  
                    <button className="btn btn-default">
                        Add text #{this.state.items.length + 1}
                    </button></div>
                    </form>
                </Col>
                <Col md={6}>
                    <TodoList items={this.state.items} deleteItem={this.deleteItem} />
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default Todo