import React, { Component } from 'react';
import { connect } from 'react-redux';


class CreateTodo extends Component {

  state = {
    text: ''
  };

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_TODO', payload: this.state});
  };

  render() {
    let todos = this.props.todos.map((todo, index) => 
      <li key={index}>{todo}</li>
    );

    return(
      <div>
        <form onSubmit= { event => this.handleSubmit(event)}>
          <p>
            <label htmlFor="todo">add todo</label>
            <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit"/>
        </form>
        <div>
          <ul>
            {todos}
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(CreateTodo);
