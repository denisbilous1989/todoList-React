import React from "react";

import './styles.scss';

const Item = ({ id, value, checked, onRemoveTodo, onCheckTodo }) => (
  <li className="item">
    <div className={checked ? 'value done' : 'value'}>
      <input
        
        className="check"
        type="checkbox"
        defaultChecked={checked}
        onClick={() => onCheckTodo(id)}
      />
      {value}
    </div>
    <button onClick={() => onRemoveTodo(id)}>
      x
    </button>
  </li>
)

export default Item;
