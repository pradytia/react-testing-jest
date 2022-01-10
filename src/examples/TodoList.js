import React from 'react';

import styles from './TodoList-style';

export default function TodoList(props) {
  let {todos, keyword} = props;
  let todoList = <li style={styles.list}>No list</li>;
  if (todos) {
    if (keyword) {
      todos = todos.filter((todo) => (todo.toLowerCase().includes(keyword.toLowerCase())));
    }
    todoList = todos.map((todo, i) => {
      return <li style={styles.list} key={i}>{todo}</li>;
    });
  }
  return (
    <div>
      <ul style={styles.listWrapper}>
        {todoList}
      </ul>
    </div>
  );
}
