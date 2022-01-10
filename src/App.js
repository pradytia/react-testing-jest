import React, {Component} from 'react';
import TodoList from './examples/TodoList';

import styles from './App-style';

export default class TodoApp extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      todos: [
        'Buy apple',
        'Buy banana',
        'Do laundry',
      ],
      keyword: '',
    };
  }

  render() {
    let {todos, keyword} = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.searchWrapper}>
          <input
            style={styles.search}
            placeholder="Search"
            type="text"
            value={keyword}
            onChange={(event) => this.setState({keyword: event.target.value})}
            autoFocus
          />
        </div>
        <TodoList todos={todos} keyword={keyword} />
      </div>
    );
  }
}
